import React, { FC, Fragment } from 'react'
import { Form, Input, Row, Col, Select, Radio, DatePicker, Divider, Image, Button } from 'antd';
import { useForm } from "../../../../../hooks/useForm";
import { CONSTANT_COMMON } from "../../../../../constants";
import './OnlineRegistrationForm.style.scss';

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

const initialState = {
    fields: {
        name_en: null,
        name_bn: null,
        father_name: null,
        gender: null,
        dob: null,
        nid: null,
        mob_no: null,
        mother_name: null,
        home_district: null,
        nationality: null,
        email: null,
        skype_id: null,
        house_no: null,
        post_office: null,
        district: null,
        village: null,
        thana: null,
        division: null,
        organization_type: null,
        organization_name: null,
        status: 1,
    }
}

const IndividualRegistrationForm: FC<any> = props => {
    const { TextArea } = Input;
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed } = useForm(initialState.fields);
    const [form_count, setform_count] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setform_count(e.target.value);
    };
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    const Form_individual=()=>{

        return(   <div>

                <p className="header_text"> Application Basic Information</p>
                <Divider />
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
                        <Col span={12}>
                            <Form.Item
                                label="Applicant’s Name (in English )"
                                name="name_en"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Father’s name"
                                name="name_en"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Gender"
                                name="gender">
                                <Select
                                    placeholder="-- Select Gender --"
                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option?.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option key="dhk" value="dhaka">Dhaka</Option>
                                    <Option key="cth" value="Chittagang">Chittagang</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Date Of Birth"
                                name="dob"
                            >
                                <DatePicker className="date_picker"
                                            format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT}

                                />
                            </Form.Item>
                            <Form.Item
                                label="NID"
                                name="nid"

                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Mobile Number"
                                name="mob_no"
                            >
                                <Input />
                            </Form.Item>

                        </Col>

                        <Col span={12}>
                            <Row gutter={[16, 16]}>
                                <Col span={16}>
                                    <Form.Item
                                        label="Applicant’s Name (in Bangla)"
                                        name="name_bn"
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Mothers’s name"
                                        name="mother_name"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Image height={125}
                                           className="profile_image"
                                           src="https://www.w3schools.com/howto/img_avatar.png"
                                    />
                                </Col>
                            </Row>
                            <Form.Item
                                label="Home District"
                                name="home_district"
                            >
                                <Select
                                    placeholder="-- Select District --"

                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option?.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option key="dhk" value="dhk">Dhaka</Option>
                                    <Option key="ctg" value="ctg">Chittagong</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Nationality"
                                name="nationality"
                            >
                                <Select
                                    placeholder="-- Select Nationality --"
                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option?.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option key="bd" value="bd">Bangladesh</Option>
                                    <Option key="ind" value="ind">India</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Skype Id"
                                name="skype_id"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <p className="header_text">Applicant’s Present Address</p>

                    <Divider />
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item
                                label="House & Road No."
                                name="house_no"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Post Office"
                                name="post_office"
                            >
                                <Select
                                    placeholder="-- Select Post Office --"

                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option?.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option key="banani" value="banani">Banani</Option>
                                    <Option key="mirpur" value="mirpur">Mirpur</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="District"
                                name="district"
                            >
                                <Select className="select_tag"
                                        placeholder="-- Select District --"
                                        showSearch
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option?.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
                                        }
                                >
                                    <Option key="dhaka" value="dhaka">Dhaka</Option>
                                    <Option key="vhola" value="vhola">Mirpur</Option>

                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Village"
                                name="village"
                            >
                                <Select className="select_tag"
                                        placeholder="-- Select Village --"
                                        showSearch
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option?.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
                                        }
                                >
                                    <Option key="mohonpur" value="mohonpur">Mohonpur</Option>
                                    <Option key="himupur" value="himupur">Himupur</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Upazila/Thana"
                                name="thana"
                            >
                                <Select
                                    placeholder="-- Select Thana --"
                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option?.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option key="mirpur" value="mirpur">Mirpur</Option>
                                    <Option key="banani" value="banani">Banani</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Division"
                                name="division"
                            >
                                <Select
                                    placeholder="-- Select Division --"

                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option?.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option key="dhaka" value="dhaka">Dhaka</Option>
                                    <Option key="shylet" value="shylet">Shylet</Option>

                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <p className="header_text"> Institute/Organization Information</p>
                    <Divider />


                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item
                                label="Institute/Organization Type"
                                name="organization_type"
                            >
                                <Select
                                    placeholder="-- Select Institute/Organization Type --"

                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option?.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option key="gvt" value="gvt">Government</Option>
                                    <Option key="pvt" value="pvt">Private</Option>

                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Institute/Organization Name"
                                name="organization_name"
                            >
                                <Select
                                    placeholder="-- Select Institute/Organization Name --"

                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option?.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option key="btrc" value="btrc">BTRC</Option>
                                    <Option key="wasa" value="wasa">Wasa</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
            </div>
        )
    }
    return (
        <Fragment>
            <div className="form-page-content form-page-content-department">
                <Row>
                    <Col span={4}>
                        <p className="main_header_text">Registration Type</p>
                    </Col>
                    <Col span={4}>

                    </Col >
                    <Col span={8}>
                        <Radio.Group onChange={onChange} value={form_count}>
                            <Radio value={'1'}>Individual</Radio>
                            <Radio value={'2'}>Institute/Organization</Radio>
                        </Radio.Group>
                    </Col >
                    <Col span={6}>
                    </Col>
                </Row>
                <Divider className="header_devider" />
                {form_count==1?<Form_individual />:null}
            </div>
        </Fragment>
    );
}
export default React.memo(IndividualRegistrationForm);