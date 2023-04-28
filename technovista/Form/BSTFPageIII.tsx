import React, { FC, Fragment } from 'react'
import {Form, Input, Row, Col, Select, Button, Radio} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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

export const BSTFPageIII: FC<any> = props => {
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
                >
                    <div className="bstf-heading-with-radio">
                        <h3>আবেদনকারী কোনো কোর্সে ভর্তির অফার পেয়েছেন কিনা</h3>
                        <Form.Item
                            name="web_access"
                        >
                            <Radio.Group 
                                value={['item1', 'item2']} 
                                onChange={(value) => console.log(value)}
                            >
                                <ul>
                                    <li><Radio value={"item1"}>{"হ্যাঁ"}</Radio></li>
                                    <li><Radio value={"item2"}>{"না"}</Radio></li>
                                </ul>
                            </Radio.Group>
                        </Form.Item>
                    </div>                
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="যদি ভর্তির অফার পেয়ে থাকে তাহলে কোন কোর্সর জন্য পেয়েছে"
                                name="offer_course"
                            >
                                <Select placeholder="এমএস/এমফিল /ডক্টরাল">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item> 
                            <Form.Item
                                label="ক্যাটাগরি "
                                name="category"
                            >
                                <Select placeholder="">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="থিসিস টাইটেল "
                                name="thesis_title"
                            >
                                <Input />
                            </Form.Item> 

                            <Form.Item
                                label="কোর্সটি সম্পর্কে সংক্ষিপ্ত বিবরণ "
                                name="course_short_description"
                                className="three-row-height"
                            >
                                <Input.TextArea
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>                           
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="অধ্যয়নের ধরন "
                                name="learning_type"
                            >
                                <Select placeholder="দেশে/ বিদেশে ">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="সাবজেক্টের নাম "
                                name="subject_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="প্রতিষ্ঠানের নাম "
                                name="institute_name"
                            >
                                <Select placeholder="">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="প্রতিষ্ঠানের ঠিকানা "
                                name="institute_address"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="কোর্স শুরুর সম্ভাব্য মাস "
                                name="course_start_month"
                            >
                                <Select placeholder="">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="কোর্স শুরুর সম্ভাব্য বছর "
                                name="course_start_year"
                            >
                                <Select placeholder="">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>                             
                        </Col>
                    </Row>
                    <h3 className="bstf-form-title">আবেদনকারী ইতিমধ্যে কোনো কোর্সে ভর্তি হয়ে থাকলে তার বিবরণ</h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="ভর্তিকৃত কোর্সের  নাম "
                                name="admission_course_name"
                            >
                                <Select placeholder="এমএস/এমফিল /ডক্টরাল ">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="ক্যাটাগরি"
                                name="category"
                            >
                                <Select placeholder="">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="থিসিস টাইটেল "
                                name="thesis_title"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="প্রতিষ্ঠানের ঠিকানা "
                                name="institute_address"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="কোর্সটি সম্পর্কে সংক্ষিপ্ত বিবরণ "
                                name="course_short_description"
                                className="two-row-height"
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
                                label="সাবজেক্টের নাম "
                                name="subject_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="প্রতিষ্ঠানের নাম"
                                name="institute_name"
                            >
                                <Select placeholder="দেশে/ বিদেশে ">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>   

                            <Form.Item
                                label="টিউশন ফির পরিমান "
                                name="tution_amount"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="কোর্স শুরুর তারিখ  "
                                name="course_start_date"
                            >
                                <Select placeholder="">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="কোর্স শেষ হওয়ার তারিখ "
                                name="course_end_date"
                            >
                                <Select placeholder="">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>             
                        </Col>
                    </Row>                
                    <h3 className="bstf-form-title">অন্য কোনো ফেলোশিপ বা বৃত্তি প্রাপ্ত হয়ে অধ্যায়নরত থাকলে তার বিবরণ </h3>                
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="বৃত্তি প্রদানকারী সংস্থা "
                                name="scholarship_provider"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="কোর্সের  নাম "
                                name="course_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="থিসিস টাইটেল "
                                name="thesis_title"
                            >
                                <Input />
                            </Form.Item>                                
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="বৃত্তির পরিমাণ "
                                name="scholarship_amount"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="সাবজেক্টের নাম "
                                name="subject_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="সংক্ষিপ্ত বিবরণ "
                                name="short_description"
                            >
                                <Input />
                            </Form.Item>                                                     
                        </Col>
                    </Row>
                    <h3 className="bstf-form-title">ইতিপূর্বে প্রাপ্ত ফেলোশিপ বা বৃত্তির বিবরণ (যদি থাকে )</h3>                
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="ফেলোশিপ বা বৃত্তির নাম "
                                name="scholarship_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="বিশ্ববিদ্যালয়ের নাম "
                                name="school_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="শুরুর তারিখ "
                                name="start_date"
                            >
                                <Input />
                            </Form.Item>                                
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="ফেলোশিপ বা বৃত্তির বিষয়ের নাম "
                                name="scholarship_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="বিশ্ববিদ্যালয়ের ঠিকানা"
                                name="school_address"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="শেষ হওয়ার তারিখ"
                                name="end_date"
                            >
                                <Input />
                            </Form.Item>                                                     
                        </Col>
                    </Row>
                    <h3 className="bstf-form-title">ইংরেজি ভাষা দক্ষতা (যদি থাকে )</h3>                
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="ইংরেজি ভাষা দক্ষতার পরীক্ষার ধরন "
                                name="english_language_exam_types"
                            >
                                <Select placeholder="TOEFL/IELTS/GRE">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="সংযুক্তি"
                                name="attachment"
                            >
                                <Input />
                            </Form.Item>              
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="প্রাপ্ত নম্বর"
                                name="result"
                            >
                                <Input />
                            </Form.Item>                                          
                        </Col>
                    </Row>
                    <h3 className="bstf-form-title">দুইজন বিশিষ্ট পরিচয়দানকারীর তথ্য </h3>                
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="নাম"
                                name="name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ঠিকানা"
                                name="address"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="মোবাইল নম্বর"
                                name="mobile_no"
                            >
                                <Input />
                            </Form.Item>                                
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="পদবি "
                                name="designation"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ফোন"
                                name="phone"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ই-মেইল"
                                name="email"
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
export default React.memo(BSTFPageIII);