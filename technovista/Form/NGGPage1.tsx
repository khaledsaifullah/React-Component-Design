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

const NGGPage1: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
            <h2 className="bstf-form-heading">বেসরকারি মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা প্রতিষ্ঠান সমূহে অনুদান প্রদানের জন্য আবেদন ফরম</h2>
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
                ><h3 className="bstf-form-title">বেসরকারি মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা প্রতিষ্ঠান সংক্রান্ত তথ্যাবলি </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={24}>
                            <Form.Item
                                label="শিক্ষা প্রতিষ্ঠানের নাম "
                                name="training_name"
                            >
                                <Input />
                            </Form.Item>                           
                        </Col>                        
                    </Row>
                    <h3 className="bstf-form-sub-title">শিক্ষা প্রতিষ্ঠানের ঠিকানা</h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="বাড়ি ও রাস্তা নং"
                                name="training_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ডাকঘর"
                                name="training_start_date"
                            >
                                <Input />
                            </Form.Item>  

                            <Form.Item
                                label="জেলা "
                                name="learning_type"
                            >
                                <Select placeholder="দেশে/ বিদেশে ">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>  

                            <Form.Item
                                label="শিক্ষা প্রতিষ্ঠানের ফোন নম্বর"
                                name="institute_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="শিক্ষা প্রতিষ্ঠানের অফিস ই-মেইল"
                                name="institute_name"
                            >
                                <Input />
                            </Form.Item>                        
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="গ্রাম"
                                name="institute_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="উপজেলা/থানা "
                                name="learning_type"
                            >
                                <Select placeholder="দেশে/ বিদেশে ">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="বিভাগ "
                                name="learning_type"
                            >
                                <Select placeholder="দেশে/ বিদেশে ">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="শিক্ষা প্রতিষ্ঠানের প্রধানের মোবাইল নম্বর"
                                name="training_end_date"
                            >
                                <Input />
                            </Form.Item> 

                            <Form.Item
                                label="ওয়েবসাইট (যদি থাকে)"
                                name="training_end_date"
                            >
                                <Input />
                            </Form.Item>                            
                        </Col>
                    </Row>
                    <div className="bstf-devider"></div>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="অধিদপ্তর /শিক্ষা বোর্ড কর্তৃক অনুমোদনের নম্বর"
                                name="designation"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="শিক্ষা প্রতিষ্ঠানে কর্মরত শিক্ষক-কর্মচারীর সংখ্যা"
                                name="join_date"
                            >
                                <Input />
                            </Form.Item>         
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="অধিদপ্তর /শিক্ষা বোর্ড কর্তৃক অনুমোদনের তারিখ"
                                name="company_name"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>                
                    <h3 className="bstf-form-title">প্রতিষ্ঠানের নামে রক্ষিত সংশ্লিষ্ট ব্যাংক হিসাবের তথ্য </h3>                
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="ব্যাংকের নাম "
                                name="fellowship_apply_class"
                            >
                                <Select placeholder="এমএস/এমফিল /ডক্টরাল ">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>  

                            <Form.Item
                                label="হিসাবের নাম "
                                name="company_name"
                            >
                                <Input />
                            </Form.Item>                                  
                        </Col>
                        <Col xs={24} md={12}>
                        <Form.Item
                                label="শাখার নাম "
                                name="fellowship_apply_class"
                            >
                                <Select placeholder="এমএস/এমফিল /ডক্টরাল ">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>  

                            <Form.Item
                                label="হিসাব নম্বর "
                                name="company_name"
                            >
                                <Input />
                            </Form.Item>                        
                        </Col>
                    </Row>                    
                    <h3 className="bstf-form-title">আবেদনকারীর পরিচয় চিহ্নিতকরণ</h3>                    
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>                            
                            <Form.Item
                                label="প্রতিষ্ঠান প্রধান / আবেদনকারীর নাম "
                                name="research_title"
                            >
                                <Input />
                            </Form.Item>         
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="প্রতিষ্ঠান প্রধান / আবেদনকারীর	পদবি"
                                name="research_institute_name"
                            >
                                <Input />
                            </Form.Item>                                                   
                        </Col>
                    </Row>
                    <h3 className="bstf-form-sub-title">আবেদনকারীর ঠিকানা</h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="বাড়ি ও রাস্তা নং"
                                name="training_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ডাকঘর"
                                name="training_start_date"
                            >
                                <Input />
                            </Form.Item>  

                            <Form.Item
                                label="জেলা "
                                name="learning_type"
                            >
                                <Select placeholder="দেশে/ বিদেশে ">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>      
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="গ্রাম"
                                name="institute_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="উপজেলা/থানা "
                                name="learning_type"
                            >
                                <Select placeholder="দেশে/ বিদেশে ">
                                    {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                        <Option key={`status-${index}`} value={StatusEnum[key]}>{key}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="বিভাগ "
                                name="learning_type"
                            >
                                <Select placeholder="দেশে/ বিদেশে ">
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
                                label="আবেদনকারীর জাতীয় পরিচয়পত্র নম্বর"
                                name="training_name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="আবেদনকারীর ই-মেইল"
                                name="training_start_date"
                            >
                                <Input />
                            </Form.Item>       
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="আবেদনকারীর মোবাইল নম্বর"
                                name="institute_name"
                            >
                                <Input />
                            </Form.Item>  
                            <Form.Item
                                label="স্কাইপ আইডি"
                                name="institute_name"
                            >
                                <Input />
                            </Form.Item>                                                
                        </Col>
                    </Row>                    
                    <div className="form-btn-group">
					  <Row gutter={[16, 16]}>
							<Col xs={8} md={8} className="form-back-btn">
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
export default React.memo(NGGPage1);