import React, { FC, Fragment } from 'react'
import {Form, Input, Row, Col, Select, Button, Checkbox, Radio, DatePicker, Space,Upload  } from 'antd';
import {EnumUtils} from "../../../../../utils";
import {StatusEnum} from "../../../../../utils/enums";
import {useForm} from "../../../../../hooks/useForm";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

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

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


const NGGPage3: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
		    <h2 className="bstf-form-heading">আমদানি/রপ্তানি পারমিটের আবেদন পত্র   </h2>
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
				<h3 className="bstf-form-title">১. আবেদনকারী/লাইসেন্সধারীর বিবরণ  </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="আবেদনকারীর নাম * " name="name" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" এনআইডি * " name="nid " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>
						<h3 className="bstf-form-sub-title">যোগাযোগের ঠিকানা </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="বাড়ি ও রাস্তা নং " name="holding_number" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" গ্রাম/মহল্লা  " name="village " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="ডাকঘর * " name="post_office" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="উপজেলা/থানা  " name="upozilla">
									<Select>
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>								
							</Col>
						</Row>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="জেলা  *" name="distict">
									<Select>
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>								
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="বিভাগ  " name="division">
									<Select>
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>								
							</Col>
						</Row>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="টেলিফোন " name="telephone_number" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" ফ্যাক্স  " name="fax" >
									<Input />
								</Form.Item>		
							</Col>
						</Row>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="মোবাইল *" name="mobile_number" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" ই-মেইল *  " name="email" >
									<Input />
								</Form.Item>		
							</Col>
						</Row>
				
				</div>
				
				
				
				
				
				<h3 className="bstf-form-title"> ২. আবেদনকারী/লাইসেন্সধারীর প্রতিষ্ঠানের পূর্ণ ঠিকানা  </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="প্রতিষ্ঠানের  নাম  * " name="name" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" প্রতিষ্ঠানে আবেদনকারীর পদবি* " name="nid " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>
						<h3 className="bstf-form-sub-title"> ঠিকানা </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={24}>
								<Form.Item label="ডাক যোগাযোগের বিস্তারিত ঠিকানা " name="holding_number" >
									<Input />
								</Form.Item>		
							</Col>
						</Row>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="ডাকঘর * " name="post_office" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="উপজেলা/থানা  " name="upozilla">
									<Select>
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>								
							</Col>
						</Row>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="জেলা  *" name="distict">
									<Select>
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>								
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="বিভাগ  " name="division">
									<Select>
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>								
							</Col>
						</Row>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="টেলিফোন " name="telephone_number" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" ফ্যাক্স  " name="fax" >
									<Input />
								</Form.Item>		
							</Col>
						</Row>
						 
				
				</div>
				
				
				<h3 className="bstf-form-title"> ৩. লাইসেন্সের বিবরণ </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={12}>
								<div className="form-text-red"> আমদানি/রপ্তানি লাইসেন্স না থাকলে প্রথমে  লাইসেন্স এর জন্য আবেদন করুন।   </div>  		
							</Col>
							<Col xs={24} md={12}>
								 <div className="form-blue-bg"> আমদানি/রপ্তানি লাইসেন্স এর জন্য আবেদন </div>  
							</Col>
						</Row>
						<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={12}>
								<div className="form-text-red"> আমদানি/রপ্তানি লাইসেন্স এর মেয়াদ নূনতম  ৩ মাস না থাকলে নবায়নের জন্য আবেদন করুন।   </div>  		
							</Col>
							<Col xs={24} md={12}>
								 <div className="form-blue-bg"> আমদানি/রপ্তানি লাইসেন্স নবায়নের জন্য আবেদন </div>  
							</Col>
						</Row>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="শ্রেণী " name="classification" >
									<Input placeholder="শ্রেণী - ঙ "  />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" লাইসেন্স নম্বর / অ্যাপ্লিকেশন ট্র্যাকিং নম্বর " name="fax" >
									<Input />
								</Form.Item>		
							</Col>
						</Row>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
							    <div className="form-padding-10"> প্রদানের তারিখ  </div>
								<div className="form-padding-10">
									<Space direction="vertical" size={12}>
										<DatePicker renderExtraFooter={() => 'extra footer'} />
									</Space>
								</div>								
							</Col>
							<Col xs={24} md={12}>
							    <div className="form-padding-10"> মেয়াদ উত্তীর্ণের তারিখ  </div>
								<div className="form-padding-10">
									<Space direction="vertical" size={12}>
										<DatePicker renderExtraFooter={() => 'extra footer'} />
									</Space>
								</div>								
							</Col>

						</Row>
						
						
				</div>
				
				
				<h3 className="bstf-form-title"> ৪. আবেদনের কারণ (সঠিক জায়গায় চিহ্ন দিন) </h3>
				<div className="form-childform-content">
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={4}>
								 	আমদানি &nbsp;&nbsp;&nbsp;<Checkbox onChange={onChange}></Checkbox>
							</Col>
							<Col xs={24} md={20}>
								 	রপ্তানি  &nbsp;&nbsp;&nbsp;<Checkbox onChange={onChange}></Checkbox>
							</Col>
						</Row>
						
				</div>
				
				
				
				
				<div className="form-btn-group">
				  <Row gutter={[16, 16]}>
						<Col xs={8} md={8} className="form-back-btn">
							 <Button>Back</Button>
						</Col>
						<Col xs={8} md={8}  className="form-save-btn">
							<Button>Save</Button>		
						</Col>
						<Col xs={8} md={8}  className="form-next-btn">
							<Button>Print Preview </Button>		
						</Col>
					</Row>
					
				</div>


				 
				 
				 
				 
				 
				 
                </Form>
            </div>
        </Fragment>
    );
}
export default React.memo(NGGPage3);