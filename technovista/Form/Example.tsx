import React, { FC, Fragment } from 'react'
import {Form, Input, Row, Col, Select} from 'antd';
import {EnumUtils} from "../../../../../utils";
import {StatusEnum} from "../../../../../utils/enums";
import {useForm} from "../../../../../hooks/useForm";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
    },
};

const initialState  = {
    fields: {
        name_en: null,
        name_bn: null,
        status: 1,
    }
}

const Example: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
            <div className="form-page-content form-page-content-registration">
                <Form
                    {...formItemLayout}
                    form={formRef}
                    name="registrationForm"
                    scrollToFirstError={true}
                    initialValues={initialValues}
                    onValuesChange={handleChange}
                    onFinish={handleSubmit}
                    onFinishFailed={handleSubmitFailed}
                >
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="Name (English)"
                                name="name_en"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Status"
                                name="status"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="Name (English)"
                                name="name_en"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Name (Bengali)"
                                name="name_bn"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Status"
                                name="status"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Fragment>
    );
}
export default React.memo(Example);