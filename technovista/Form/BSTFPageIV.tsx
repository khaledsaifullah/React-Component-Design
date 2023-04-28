import React, { FC, Fragment } from 'react'
import {Form, Input, Row, Col, Select, Radio, Button} from 'antd';
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

export const BSTFPageIV: FC<any> = props => {
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
                        <h3>সংযুক্তি </h3>                        
                    </div>                
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="সংযুক্তির ধরন"
                                name="offer_course"
                            >
                                <Select placeholder="NID/Passport/Certificates">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item> 

                            <Form.Item
                                label="মন্তব্য"
                                name="thesis_title"
                            >
                                <Input />
                            </Form.Item>                                                        
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="সংযুক্তির নাম"
                                name="thesis_title"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="সংযুক্ত"
                                name="subject_name"
                            >
                                <Input placeholder="Maximum file size 10 Mb"/>
                            </Form.Item>                                                       
                        </Col>
                    </Row>
                    <h3 className="bstf-form-title">অঙ্গিকারনামা সংক্রান্ত</h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <div className="bstf-form-text">আমি নিজে এ আবেদন দাখিল করছি</div>         
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="web_access"
                                className="bstf-text-with-radio"
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
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <div className="bstf-form-text">আমাকে বঙ্গবন্ধু বিজ্ঞান ও প্রযুক্তি ফেলোশিপ প্রদান করা হলে আমি ডিগ্রি শেষে দেশে প্রত্যাবর্তন করে নির্ধারিত সময়ের জন্য কোনো সরকারি /বেসরকারি সংস্থায় চাকরি /সেবা প্রদান করতে বাধ্য থাকবো। </div>         
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="web_access"
                                className="bstf-text-with-radio"
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
                        </Col>
                    </Row>
                    <h3 className="repeat-promise-title">আমি পুনরায় নিচের তথ্যগুলো নিশ্চিত করছি</h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="আবেদনকারীর নাম"
                                name="thesis_title"
                            >
                                <Input disabled={true}/>
                            </Form.Item>
                            <Form.Item
                                label="এনআইডি"
                                name="thesis_title"
                            >
                                <Input disabled={true}/>
                            </Form.Item>                                                        
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="মোবাইল নম্বর"
                                name="thesis_title"
                            >
                                <Input disabled={true}/>
                            </Form.Item>

                            <Form.Item
                                label="ই-মেইল"
                                name="subject_name"
                            >
                                <Input disabled={true}/>
                            </Form.Item>                                                       
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <div className="bstf-form-text">আমি এ মর্মে হলফ করছি যে, উপরে যে সব তথ্য পরিবেশিত হয়েছে তা সঠিক ও সত্য। </div>         
                            <Form.Item
                                label="আবেদনকারীর স্বাক্ষর "
                                name="subject_name"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="web_access"
                                className="bstf-text-with-radio"
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
                        </Col>
                    </Row>                    
                    <h3 className="bstf-form-title">সংস্থা প্রধানের সুপারিশ সহ স্বাক্ষর (চাকুরীরতদের জন্য বাধ্যতামূলক)</h3>                
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="সংস্থা প্রধানের নাম "
                                name="scholarship_provider"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="মোবাইল নম্বর "
                                name="course_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="সংস্থা প্রধানের স্বাক্ষর  "
                                name="thesis_title"
                            >
                                <Input />
                            </Form.Item>                                
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="সংস্থা প্রধানের পদবি "
                                name="scholarship_amount"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ই-মেইল "
                                name="subject_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="সংযুক্তি"
                                name="short_description"
                            >
                                <Input />
                            </Form.Item>                                                     
                        </Col>
                    </Row>
                    <div className="bstf-devider"></div>  
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="অ্যাপ্লিকেশন ট্র্যাকিং নম্বর "
                                name="scholarship_provider"
                            >
                                <Input disabled={true}/>
                            </Form.Item>                                                       
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="আবেদন জমা দেওয়ার তারিখ"
                                name="short_description"
                            >
                                <Input disabled={true}/>
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
                                 <Button className="bstf-button">Submit</Button>		
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
export default React.memo(BSTFPageIV);