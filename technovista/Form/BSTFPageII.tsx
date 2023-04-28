import React, { FC, Fragment } from 'react'
import {Form, Input, Row, Col, Select, Button} from 'antd';
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

export const BSTFPageII: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
            <h2 className="bstf-form-heading">বঙ্গবন্ধু বিজ্ঞান ও প্রযুক্তি ফেলোশিপ ট্রাস্টের ফেলোশিপের জন্য  আবেদন ফরম </h2>
            <div className="form-page-content form-page-content-registration bstf-form">
                <Form
                    {...formItemLayout}
                    form={formRef}
                    name="registrationForm"
                    scrollToFirstError={true}
                    initialValues={initialValues}
                    onValuesChange={handleChange}
                    onFinish={handleSubmit}
                    onFinishFailed={handleSubmitFailed}
                ><h3 className="bstf-form-title">প্রশিক্ষণের বিবরণ (যদি থাকে ) </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="প্রশিক্ষণের নাম "
                                name="training_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="প্রশিক্ষণ শুরুর তারিখ "
                                name="training_start_date"
                            >
                                <Input />
                            </Form.Item>                            
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="প্রতিষ্ঠানের নাম"
                                name="institute_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="প্রশিক্ষণ শেষের তারিখ"
                                name="training_end_date"
                            >
                                <Input />
                            </Form.Item>                             
                        </Col>
                    </Row>
                    <h3 className="bstf-form-title">পেশাগত অভিজ্ঞতার  বিবরণ (যদি থাকে ) </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="পদবী"
                                name="designation"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="যোগদানের  তারিখ"
                                name="join_date"
                            >
                                <Input />
                            </Form.Item>         
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="প্রতিষ্ঠানের নাম"
                                name="company_name"
                            >
                                <Input />
                            </Form.Item>   

                            <Form.Item
                                label="মন্তব্য"
                                name="comment"
                            >
                                <Input />
                            </Form.Item>             
                        </Col>
                    </Row>                
                    <h3 className="bstf-form-title">ফেলোশিপের শ্রেণি</h3>                
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="নিচের কোন ফেলোশিপ শ্রেণির জন্য আপনি আবেদন করছেন?"
                                name="fellowship_apply_class"
                            >
                                <Select placeholder="এমএস/এমফিল /ডক্টরাল ">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>  

                            <Form.Item
                                label="বাংলাদেশের আর্থ সামাজিক ক্ষেত্রে এই শিক্ষা/গবেষনার  গুরুত্ব"
                                name="learning_importance"
                                className="bstf-field-large-title"
                            >
                                <Input.TextArea
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>                                   
                        </Col>
                        <Col xs={24} md={12}>
                        <Form.Item
                                label="অধ্যয়নের ধরন"
                                name="learning_type"
                            >
                                <Select placeholder="দেশে/ বিদেশে ">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>  

                            <Form.Item
                                label="অন্য কোন কোন বিশ্ববিদ্যালয়ে এই কাজ বা গবেষণা  হচ্ছে  তাদের ঠিকানা ও বিবরণ এবং কাজের সারাংশ (যদি থাকে )"
                                name="research_info"
                                className="bstf-field-large-title"
                            >
                                <Input.TextArea
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>                          
                        </Col>
                    </Row>                    
                    <h3 className="bstf-form-title">আবেদনকারী পূর্বে কোনো গবেষণামূলক কাজ করে থাকলে সে সম্পর্কিত তথ্য</h3>
                    <h3 className="bstf-form-sub-title">পূর্বের  গবেষণামূলক কাজের তথ্য</h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>                            
                            <Form.Item
                                label="গবেষণার শিরোনাম"
                                name="research_title"
                            >
                                <Input />
                            </Form.Item>   
                            <Form.Item
                                label="গবেষণার বছর"
                                name="research_year"
                            >
                                <Input />
                            </Form.Item>         
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="প্রতিষ্ঠানের নাম"
                                name="research_institute_name"
                            >
                                <Input />
                            </Form.Item> 
                            <Form.Item
                                label="মন্তব্য / বর্ণনা"
                                name="research_comment"
                            >
                                <Input />
                            </Form.Item>                           
                        </Col>
                    </Row>
                    <h3 className="bstf-form-sub-title">প্রকাশনা</h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>                            
                            <Form.Item
                                label="জার্নালের ধরন"
                                name="journal_type"
                            >
                                <Input />
                            </Form.Item>   
                            <Form.Item
                                label="প্রকাশনা/প্রকাশক"
                                name="publications"
                            >
                                <Input />
                            </Form.Item>   
                            <Form.Item
                                label="লেখক"
                                name="writer"
                            >
                                <Input />
                            </Form.Item>         
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="টাইটেল "
                                name="title"
                            >
                                <Input />
                            </Form.Item> 
                            <Form.Item
                                label="প্রকাশনার তারিখ"
                                name="publication_date"
                            >
                                <Input />
                            </Form.Item> 
                            <Form.Item
                                label="মন্তব্য / বর্ণনা"
                                name="publication_comment"
                            >
                                <Input />
                            </Form.Item>                           
                        </Col>
                    </Row>                    
                    <div className="form-btn-group">
					  <Row gutter={[16, 16]}>
							<Col xs={8} md={8} className="form-back-btn">
								 <Button className="bstf-button">Back</Button>		
							</Col>
							<Col xs={8} md={8}  className="form-save-btn">
							 	<Button className="bstf-button">Save</Button>		
							</Col>
							<Col xs={8} md={8}  className="form-next-btn">
							 	<Button className="bstf-button">Next</Button>		
							</Col>
						</Row>						
					</div>
                </Form>
            </div>
        </Fragment>
    );
}
export default React.memo(BSTFPageII);