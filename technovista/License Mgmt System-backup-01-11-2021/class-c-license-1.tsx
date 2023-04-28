import React, { FC, Fragment } from 'react'
import {Form, Input, Row, Col, Select, Button, Checkbox, Radio, DatePicker, Space,Upload  } from 'antd';
import {EnumUtils} from "../../../../../utils";
import {StatusEnum} from "../../../../../utils/enums";
import {useForm} from "../../../../../hooks/useForm";

import { PlusOutlined } from '@ant-design/icons';


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
		    <h2 className="bstf-form-heading">  আমদানি/রপ্তানি লাইসেন্সের   আবেদন পত্র ("ঙ" শ্রেণীর লাইসেন্স) </h2>
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
				<h3 className="bstf-form-title"> ১. আবেদনের কারণ (সঠিক জায়গায় <Radio></Radio> চিহ্ন  দিন)*   </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={10}>
								 <Row gutter={[16, 16]}>
									<Col xs={24} md={8}>নতুন লাইসেন্স &nbsp; <Radio></Radio>  </Col>
									<Col xs={24} md={16}> &nbsp;লাইসেন্স নবায়ন /সংশোধন &nbsp;<Radio></Radio>  </Col>
								 </Row>		
							</Col>
							<Col xs={24} md={14}>
								 <Row gutter={[16, 16]}>
									<Col xs={24} md={8}> লাইসেন্স নবায়ন &nbsp; <Checkbox></Checkbox>  </Col>
									<Col xs={24} md={16}> লাইসেন্স সংশোধন  &nbsp; <Checkbox></Checkbox>  </Col>
								 </Row>		
							</Col>
						</Row>	
						<h3 className="bstf-form-title"> যদি লাইসেন্স নবায়ন /সংশোধনের আবেদন হয়     </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="লাইসেন্স নং  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="লাইসেন্সের প্রকার  " name="licence_types " >
									<Input placeholder="শ্রেণী - 'ঙ' " />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<div className="form-padding-10">লাইসেন্স প্রদানের/নবায়নের তারিখ </div>
								<div className="form-padding-10">
									<Space direction="vertical" size={12}>
										<DatePicker renderExtraFooter={() => 'extra footer'} />
									</Space>					
								</div>								
							</Col>
							<Col xs={24} md={12}>
								<div className="form-padding-10">মেয়াদোত্তীর্নের তারিখ  </div>
								<div className="form-padding-10">
									<Space direction="vertical" size={12}>
										<DatePicker renderExtraFooter={() => 'extra footer'} />
									</Space>					
								</div>								
							</Col>
						</Row>	
						 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								 <div className="form-padding-10 bstf-form-title-color">সংশোধন এর ধরণ উল্লেখ করুণ  (সংশোধনের ক্ষেত্রে)   </div>
								 <Row gutter={[16, 16]}  className="form-padding-5">
									<Col xs={24} md={8}> লাইসেন্সধারীর নাম &nbsp; <Checkbox></Checkbox>  </Col>
									<Col xs={24} md={8}> প্রতিষ্ঠানের নাম &nbsp; <Checkbox></Checkbox>  </Col>
									<Col xs={24} md={8}> প্রতিষ্ঠানের ঠিকানা &nbsp; <Checkbox></Checkbox>  </Col>
								 </Row>		
							</Col>
							<Col xs={24} md={12}>
								<div className="form-padding-10"> সংযুক্ত </div>
								<Form.Item name="licence_coonection " >
									<Input   />
								</Form.Item>		
							</Col>
						</Row>	
						 

						 

				</div>	

 
 
 
				<h3 className="bstf-form-title"> ২. কর্মকান্ডের উদ্দেশ্য  (সঠিক জায়গায়  চিহ্ন  দিন) *   </h3>
				<div className="form-childform-content">
					<Row gutter={[16, 16]}  className="form-padding-5">
						<Col xs={24} md={4}> আমদানী  &nbsp; <Checkbox></Checkbox>  </Col>
						<Col xs={24} md={4}> রপ্তানী   &nbsp; <Checkbox></Checkbox>  </Col>
						<Col xs={24} md={16}> উভয় প্রকার &nbsp; <Checkbox></Checkbox>  </Col>
					</Row>	 
 
				</div>	
 
 
				<h3 className="bstf-form-title"> ৩. আমদানি/রপ্তানি পদার্থ   (সঠিক জায়গায় চিহ্ন  দিন) * </h3>
				<div className="form-childform-content">
					<Row gutter={[16, 16]}  className="form-padding-5">
						<Col xs={24} md={4}> তেজস্ক্রিয় পদার্থ &nbsp; <Checkbox></Checkbox>  </Col>
						<Col xs={24} md={4}> পারমাণবিক পদার্থ &nbsp; <Checkbox></Checkbox>  </Col>
						<Col xs={24} md={16}> এক্সরে, সিটি, ডেন্টাল, মেমোগ্রাফী, LINAC ইত্যাদি মেশিন  (বিকিরণকারী যন্ত্রপাতি)  &nbsp; <Checkbox></Checkbox>  </Col>
					</Row>	 
 
				</div>	
 
 
 
 				<h3 className="bstf-form-title"> ৪. আবেদনকারী/লাইসেন্সধারীর বিবরণ *  </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="নাম  (লাইসেন্স এ যে নাম থাকবে সেই নাম লিখতে হবে) * " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" এনআইডি  * " name="licence_nid " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	 
						<h3 className="bstf-form-title"> পূর্ণ ডাক যোগাযোগের ঠিকানা    </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="বাড়ি ও রাস্তা নং  " name="holding_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" গ্রাম  " name="village_name " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="ডাকঘর  *" name="invoice_postoffice " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" উপজেলা/থানা *" name="licence_upozila " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="জেলা " name="district">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>							
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="বিভাগ  " name="division">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>							
							</Col>
						</Row>	 

						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="টেলিফোন  " name="telephone_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" ফ্যাক্স  " name="fax_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="মোবাইল  *" name="mobile_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" ই-মেইল *  " name="email_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	 
						<h3 className="bstf-form-title"> প্রতিষ্ঠানের নাম ও ঠিকানা   </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="প্রতিষ্ঠানের  নাম   *" name="institure_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="প্রতিষ্ঠানে আবেদনকারীর পদবি  *" name="institure_applied_rank " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={24}>
								<Form.Item label="পূর্ণ ডাক যোগাযোগের ঠিকানা  *" name="full_postal_address " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="ডাকঘর  *" name="postoffice " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="উপজেলা/থানা " name="upazila">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>
							</Col>
						</Row>	 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="জেলা " name="district">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>							
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="বিভাগ  " name="division">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>							
							</Col>
						</Row>	 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="টেলিফোন  " name="phone_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" ফ্যাক্স  " name="fax_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	 







						
				</div>	
 
  
 
 
 
 
				<div className="form-btn-group">
				  <Row gutter={[16, 16]}>
						<Col xs={8} md={8} className="form-back-btn">
							  
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