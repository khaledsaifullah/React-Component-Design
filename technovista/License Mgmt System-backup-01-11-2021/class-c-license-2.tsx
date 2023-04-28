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
		    <h2 className="bstf-form-heading"> বিকিরণকারী যন্ত্রপাতির লাইসেন্সের আবেদন পত্র ("গ" শ্রেণীর লাইসেন্স) </h2>
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
				<h3 className="bstf-form-title"> ৫. বিকিরণকারী যন্ত্রপাতির ব্যবহার অথবা গুদামজাতকরণ করিবার স্থানের পূর্ণ ঠিকানা    </h3>
				<div className="form-childform-content">
						<h3 className="bstf-form-title">  প্রতিষ্ঠানের নাম ও ঠিকানা একই হলে টিক দিন  <Checkbox></Checkbox> </h3>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="প্রতিষ্ঠানের  নাম  * " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="প্রতিষ্ঠানে আবেদনকারীর	পদবি * " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="বাড়ি ও রাস্তা নং  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="গ্রাম " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="ডাক ঘর  *" name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="উপজেলা/থানা  *" name="gender">
									<Select>
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="জেলা *" name="gender">
									<Select>
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="বিভাগ *" name="gender">
									<Select>
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>		
							</Col>
						</Row>							
										
				</div>
				
				
	 				
				
				
				
				<h3 className="bstf-form-title"> ৬. এই আবেদন পত্রের ব্যাপারে যোগাযোগের জন্য প্রাধিকার প্রাপ্ত ব্যাক্তির বিবরণ  </h3>
				<div className="form-childform-content">

						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="নাম  * " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label=" এনআইডি  *" name="gender">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>								
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<div className="form-padding-10">জন্ম তারিখ * </div>
								<div className="form-padding-10">
									<Space direction="vertical" size={12}>
										<DatePicker renderExtraFooter={() => 'extra footer'} />
									</Space>							
								</div>
							</Col>
							<Col xs={24} md={12}>
								<div className="form-padding-10">স্বাক্ষর * </div>
								<div className="form-padding-10">
									<Form.Item   name="licence_number " >
										<Input />
									</Form.Item>		
								</div>
							</Col>
						</Row>
						<h3 className="bstf-form-title">  ডাক যোগাযোগের ঠিকানা  </h3>						
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="বাড়ি ও রাস্তা নং   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="গ্রাম " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="ডাক ঘর * " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="উপজেলা/থানা *" name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="জেলা *" name="gender">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>							
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="বিভাগ *" name="gender">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>							
							</Col>
						</Row>	
						 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="টেলিফোন   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="ফ্যাক্স  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="মোবাইল * " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="ই-মেইল * " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	




						
				</div>
				



				
				<h3 className="bstf-form-title"> ৭. বিকিরণ নিয়ন্ত্রণ কর্মকর্তার (আর. সি. ও) বিবরণ *  </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={12}>
								<div className="form-text-red"> যদি RCO না থাকে তাহলে প্রথমে RCO মনোনয়ন অনুমোদনের জন্য আবেদন করতে হবে   </div>  		
							</Col>
							<Col xs={24} md={12}>
								 <div className="form-blue-bg"> RCO মনোনয়ন অনুমোদনের জন্য আবেদন </div>  
							</Col>
						</Row>

						<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={12}>
								<div className="form-text-red"> মেয়াদোত্তীর্নের হয়ে গেলে RCO নবায়নের জন্য আবেদন করতে হবে   </div>  		
							</Col>
							<Col xs={24} md={12}>
								 <div className="form-blue-bg"> RCO নবায়নের জন্য আবেদন  </div>  
							</Col>
						</Row>
				
						<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={12}>
								<Form.Item label="নাম  * " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="পুরুষ/মহিলা  * " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>
						
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<div className="form-padding-10"> জন্ম তারিখ  * </div>
							<div className="form-padding-10">
								<Space direction="vertical" size={12}>
									<DatePicker renderExtraFooter={() => 'extra footer'} />
								</Space>							
							</div>
						</Col>	
						<Col xs={24} md={12}>
							<div className="form-padding-10"> শিক্ষাগত যোগ্যতা   * </div>
							<div className="form-padding-10">
								<Form.Item   name="licence_number " >
									<Input />
								</Form.Item>	
							</div>							
						</Col>	
					</Row>			
						 

				
				
				
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<div className="form-padding-10"> আর. সি. ও অনুমোদন নং   * </div>
							<div className="form-padding-10">
								<Form.Item   name="licence_number " >
									<Input />
								</Form.Item>	
							</div>							
						</Col>	
						<Col xs={24} md={12}>
							<div className="form-padding-10"> তারিখ *  </div>
							<div className="form-padding-10">
								<Space direction="vertical" size={12}>
									<DatePicker renderExtraFooter={() => 'extra footer'} />
								</Space>							
							</div>
						</Col>	
					</Row>			
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<div className="form-padding-10"> বৈধতার মেয়াদ * </div>
							<div className="form-padding-10">
								<Form.Item   name="licence_number " >
									<Input />
								</Form.Item>	
							</div>							
						</Col>	
						<Col xs={24} md={12}>
							<div className="form-padding-10"> মেয়াদোত্তীর্নের তারিখ *  </div>
							<div className="form-padding-10">
								<Space direction="vertical" size={12}>
									<DatePicker renderExtraFooter={() => 'extra footer'} />
								</Space>							
							</div>
						</Col>	
					</Row>			
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<div className="form-padding-10"> নবায়নের  তারিখ* </div>
							<div className="form-padding-10">
								<Space direction="vertical" size={12}>
									<DatePicker renderExtraFooter={() => 'extra footer'} />
								</Space>							
							</div>
						</Col>	
					</Row>			
				 
						<h3 className="bstf-form-title"> লাইসেন্স/নবায়ন /সংশোধন ফী     </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="লাইসেন্স/নবায়ন /সংশোধন ফী (টাকায়)  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="লাইসেন্স/নবায়ন /সংশোধন ফী (কথায় )  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						 
						 
 					<h3 className="bstf-form-title"> আবেদনকারী/লাইসেন্সধারী ব্যাক্তির প্রত্যায়ন     </h3>					
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={14}>
								আমি এই মর্মে অবগত আছি যে, এই আবেদন পত্রে যে সকল বিবরণী এবং প্রস্তাবনা বিধৃত হইয়াছে তাহা আমার উপর বাধ্যতামূলকভাবে বর্তাবে । 
							</Col>
							<Col xs={24} md={10}>
								 <Row gutter={[16, 16]}>
									<Col xs={24} md={8}> <Radio>হ্যাঁ </Radio>  </Col>
									<Col xs={24} md={16}> <Radio>না</Radio>  </Col>
								 </Row>		
							</Col>
						</Row>	
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={14}>
								আমি এই মর্মে প্রত্যায়ন করিতেছি যে, এই আবেদনপত্র কর্তৃপক্ষ কর্তৃক প্রণীত/গৃহীত প্রযোজ্য প্রমিতি, কোড ও নির্দেশিকা এবং অন্যান্য বিধি সম্মত কর্মকাণ্ডের সহিত সঙ্গতি রাখিয়া প্রণয়ন করা হইয়াছে এবং আমার বিশ্বাস ও জানা মতে এই আবেদন পত্রের সকল তথ্য সত্য এবং সঠিক 
							</Col>
							<Col xs={24} md={10}>
								 <Row gutter={[16, 16]}>
									<Col xs={24} md={8}> <Radio>হ্যাঁ </Radio>  </Col>
									<Col xs={24} md={16}> <Radio>না</Radio>  </Col>
								 </Row>		
							</Col>
					</Row>	
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={14}>
								আমি পুনরায় নিচের তথ্যগুলো নিশ্চিত করছি
							</Col>
					</Row>	
						 
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
								<Form.Item label="নাম  " name="licence_types " >
									<Input  />
								</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
								<Form.Item label="প্রতিষ্ঠানের পদ  " name="licence_types " >
									<Input  />
								</Form.Item>		
						</Col>
					</Row>	
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
								<Form.Item label="এনআইডি  " name="licence_types " >
									<Input  />
								</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
								<Form.Item label="মোবাইল নম্বর   " name="licence_types " >
									<Input  />
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