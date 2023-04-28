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

export const BSTFPageI: FC<any> = props => {
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
                ><h3 className="bstf-form-title">আবেদনকারীর তথ্য </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="আবেদনকারীর নাম  (বাংলায় )"
                                name="applier_name_bn"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="পিতার নাম (বাংলায় )"
                                name="father_name_bn"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="মাতার নাম (বাংলায় )"
                                name="mother_name_bn"
                            >
                                <Input />
                            </Form.Item>

                            <div className="bstf-dob">
                                <Form.Item
                                    label="জন্ম তারিখ"
                                    name="dob"
                                    className="ant-col-md-11 bstf-dob-field"
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="আবেদনপত্র জমা দেওয়ার শেষ তারিখে বয়স"
                                    name="end_age"
                                    className="ant-col-md-13"
                                >
                                    <Input disabled={true}/>
                                </Form.Item>
                            </div>

                            <Form.Item
                                label="জাতীয় পরিচয়পত্র নম্বর"
                                name="nid"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="বৈবাহিক অবস্থা "
                                name="maritial_status"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="আবেদনকারীর বর্তমান অবস্থা "
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
                                label="আবেদনকারীর নাম  (ইংরেজীতে )"
                                name="applier_name_en"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="পিতার নাম (ইংরেজীতে )"
                                name="father_name_en"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="মাতার নাম (ইংরেজীতে )"
                                name="mother_name_en"
                            >
                                <Input />
                            </Form.Item>                            

                            <Form.Item
                                label="লিঙ্গ"
                                name="gender"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="জাতীয়তা"
                                name="nationality"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="সন্তান সংখ্যা (যদি থাকে )"
                                name="child_status"
                            >
                                <Input />
                            </Form.Item>  
                        </Col>
                    </Row>
                    <h3 className="bstf-form-title">আবেদনকারীর স্থায়ী ঠিকানা </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="বাড়ি ও রাস্তা নং"
                                name="house_no"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ডাক ঘর"
                                name="post_office"
                            >
                                <Input />
                            </Form.Item>
                            
                            <Form.Item
                                label="জেলা"
                                name="dist"
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
                                label="গ্রাম"
                                name="village"
                            >
                                <Input />
                            </Form.Item>                           

                            <Form.Item
                                label="উপজেলা/থানা"
                                name="thana"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="বিভাগ"
                                name="division"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>                            
                        </Col>
                    </Row>                
                    <h3 className="bstf-form-title">আবেদনকারীর পত্র যোগাযোগের ঠিকানা</h3>                
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="বাড়ি ও রাস্তা নং"
                                name="house_no"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ডাক ঘর"
                                name="post_office"
                            >
                                <Input />
                            </Form.Item>
                            
                            <Form.Item
                                label="জেলা"
                                name="dist"
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
                                label="গ্রাম"
                                name="village"
                            >
                                <Input />
                            </Form.Item>                           

                            <Form.Item
                                label="উপজেলা/থানা"
                                name="thana"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="বিভাগ"
                                name="division"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>                            
                        </Col>
                    </Row>
                    <div className="bstf-devider"></div>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="মোবাইল নম্বর"
                                name="mobile"
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
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="বিকল্প  মোবাইল নম্বর"
                                name="alternate_mobile"
                            >
                                <Input />
                            </Form.Item>  

                            <Form.Item
                                label="স্কাইপ আইডি"
                                name="skype"
                            >
                                <Input />
                            </Form.Item>                                                        
                        </Col>
                    </Row>
                    <h3 className="bstf-form-title">শিক্ষাগত যোগ্যতা</h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>                            
                            <Form.Item
                                label="প্রতিষ্ঠানের নাম"
                                name="company_name"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>  
                            <Form.Item
                                label="পরীক্ষার নাম"
                                name="exam_name"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="পাশের বছর"
                                name="passing_year"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="প্রাপ্ত গ্রেড /শ্রেণি "
                                name="result"
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
                                label="বোর্ড/বিশ্ববিদ্যালয়"
                                name="board"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="গ্রুপ/বিষয়/বিভাগ"
                                name="department"
                            >
                                <Select placeholder="-- Select --">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item> 
                            
                            <Form.Item
                                label="প্রাপ্ত নম্বর"
                                name="total_number"
                            >
                                <Input />
                            </Form.Item>                           
                        </Col>
                    </Row>
                    <div className="form-btn-group">
					  <Row gutter={[16, 16]}>	
                            <Col xs={8} md={8}>							 			
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
export default React.memo(BSTFPageI);