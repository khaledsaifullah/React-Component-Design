import React, { FC, Fragment } from 'react'
import {Form, Input, Row, Col, Select, Button, Checkbox, Radio, DatePicker, Space   } from 'antd';
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

const GARDPPage3: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
            <div className="form-page-content form-page-content-registration">
				<div className="form-main-title"><span> NST Fellowship Application   </span></div>
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
				
				<div className="form-subheading-bottom-border"> Part 8 : Impact area of your research work   </div>
				<div className="form-childform-content">
					<div className="form-subheading-bottom-border"> Write the name(s) of industry(s)/ impact area(s) your research result can be best and most useable (for M.Phil. and PhD research only)   </div>
					<div className="form-plus-btn">
						<Button icon={<PlusOutlined />} > Add </Button>						
					</div>
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={24}>
								<Form.Item name="name_ofthe_supervisor " >
									<Input />
								</Form.Item>		
							</Col>
					</Row>
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={24}>
								<Form.Item name="name_ofthe_supervisor " >
									<Input />
								</Form.Item>		
							</Col>
					</Row>
					<div className="form-subheading-bottom-border"> Write the names of researches already done by any other PhD researchers that can be considered  as close to your research work (for M.Phil. and PhD only) </div>    
					<div className="form-plus-btn">
						<Button icon={<PlusOutlined />} > Add </Button>						
					</div>
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={24}>
								<Form.Item name="name_ofthe_supervisor " >
									<Input />
								</Form.Item>		
							</Col>
					</Row>
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={24}>
								<Form.Item name="name_ofthe_supervisor " >
									<Input />
								</Form.Item>		
							</Col>
					</Row>
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={24}>
								<Form.Item name="name_ofthe_supervisor " >
									<Input />
								</Form.Item>		
							</Col>
					</Row>
					<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={24}>
								<Form.Item name="name_ofthe_supervisor " >
									<Input />
								</Form.Item>		
							</Col>
					</Row>

					 


					
				</div>                    
				
				 
				 
				<div className="form-subheading-bottom-border"> Part 9: Applicant’s financial assistance record   </div>
				<div className="form-childform-content">				 
					<div className="form-border-bottom">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<div className="form-colored-text"> Did you get NST fellowship before else?   </div>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item  name="web_access" > 
									<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
										<ul className="form-display-flex form-padding">
											<li><Radio value={"yes"}>{"Yes"}</Radio></li>
											<li><Radio value={"no"}>{"No"}</Radio></li>
										</ul>
									</Radio.Group>
								</Form.Item>	
							</Col>
						</Row>
					</div>
					<Row gutter={[16, 16]} className="form-padding-10">
						<Col xs={24} md={12}>
						    <div className="form-colored-text">If yes, mention the financial year:</div>
							<Space direction="vertical" size={12}>
								<DatePicker renderExtraFooter={() => 'extra footer'} />
							</Space>
						</Col>
						<Col xs={24} md={12}>
						   <div className="form-colored-text">To Year:</div>
							<Space direction="vertical" size={12}>
								<DatePicker renderExtraFooter={() => 'extra footer'} />
							</Space>
						</Col>
					</Row>					
					
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Gender " name="gender">
								<Select placeholder="-- Select --" >
									<Option value={"Male"}>Male </Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Serial number " name="serial_number " >
										<Input />
									</Form.Item>		
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="ID number  " name="id_number " >
										<Input />
									</Form.Item>		
								</Col>
							</Row>
							 
						</Col>
					</Row>	
					
					<div className="form-border-bottom">
						<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={12}>
								<div className="form-colored-text"> Presently do you get any financial support / stipend other than NST?   </div>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item  name="web_access" > 
									<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
										<ul className="form-display-flex form-padding">
											<li><Radio value={"yes"}>{"Yes"}</Radio></li>
											<li><Radio value={"no"}>{"No"}</Radio></li>
										</ul>
									</Radio.Group>
								</Form.Item>	
							</Col>
						</Row>
					</div>



					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="If yes, write the name of the source   " name="id_number " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Annual amount (Tk.)  " name="id_number " >
								<Input />
							</Form.Item>		
						</Col>
						 
					</Row>	



					
						
				</div>


				<div className="form-subheading-bottom-border"> Part 10 : Applicant’s job related information   </div>
				<div className="form-childform-content">				 
						<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={12}>
								<div className="form-colored-text form-fontweight-bold"> Are you engaged in any salaried job?   </div>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item  name="web_access" > 
									<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
										<ul className="form-display-flex form-padding">
											<li><Radio value={"yes"}>{"Yes"}</Radio></li>
											<li><Radio value={"no"}>{"No"}</Radio></li>
										</ul>
									</Radio.Group>
								</Form.Item>	
							</Col>
						</Row>
					 
					 
					 
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<div>If yes, Name of the organization :</div>
								<Space direction="vertical" size={12}>
									<DatePicker renderExtraFooter={() => 'extra footer'} />
								</Space>
								<Form.Item label="Designation " name="designation">
									<Select placeholder="-- Select --" >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>
								<Form.Item label="If No, name of your current occupation  " name="designation_ofthe_supervisor " >
									<Input />
								</Form.Item>								
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Address " name="address">
									<TextArea autoSize={{ minRows: 6, maxRows: 6 }} placeholder=""   />
								</Form.Item>		
							</Col>
							 
						</Row>	


						<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={12}>
								<div className="form-colored-text"> Did you get official permission for study (if applicable)?   </div>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item  name="web_access" > 
									<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
										<ul className="form-display-flex form-padding">
											<li><Radio value={"yes"}>{"Yes"}</Radio></li>
											<li><Radio value={"no"}>{"No"}</Radio></li>
										</ul>
									</Radio.Group>
								</Form.Item>	
							</Col>
						</Row>

						<Row gutter={[16, 16]} className="form-padding-10">
							<Col xs={24} md={12}>
								<div className="form-colored-text"> Did you get leave from your office (if applicable)?  </div>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item  name="web_access" > 
									<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
										<ul className="form-display-flex form-padding">
											<li><Radio value={"yes"}>{"Yes"}</Radio></li>
											<li><Radio value={"no"}>{"No"}</Radio></li>
										</ul>
									</Radio.Group>
								</Form.Item>	
							</Col>
						</Row>


					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<div className="form-colored-text"> Duration of deputation from :</div>
								<Space direction="vertical" size={12}>
									<DatePicker renderExtraFooter={() => 'extra footer'} />
								</Space>
							</Col>
							<Col xs={24} md={12}>
								<div className="form-colored-text"> To Date :</div>
								<Space direction="vertical" size={12}>
									<DatePicker renderExtraFooter={() => 'extra footer'} />
								</Space>
							</Col>
							 
					</Row>

					<Row gutter={[16, 16]} className="form-padding-10">
						<Col xs={24} md={12}>
							<div className="form-colored-text"> Did you get deputation from your office (if applicable)?  </div>	
						</Col>
						<Col xs={24} md={12}>
							<Form.Item  name="web_access" > 
								<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
									<ul className="form-display-flex form-padding">
										<li><Radio value={"yes"}>{"Yes"}</Radio></li>
										<li><Radio value={"no"}>{"No"}</Radio></li>
									</ul>
								</Radio.Group>
							</Form.Item>	
						</Col>
					</Row>



					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<div className="form-colored-text"> Duration of deputation from :</div>
								<Space direction="vertical" size={12}>
									<DatePicker renderExtraFooter={() => 'extra footer'} />
								</Space>
							</Col>
							<Col xs={24} md={12}>
								<div className="form-colored-text"> To Date :</div>
								<Space direction="vertical" size={12}>
									<DatePicker renderExtraFooter={() => 'extra footer'} />
								</Space>
							</Col>
							 
					</Row>


					<Row gutter={[16, 16]} className="form-padding-10">
						<Col xs={24} md={12}>
							<div className="form-colored-text"> Did you get deputation from your office (if applicable)?  </div>	
						</Col>
						<Col xs={24} md={12}>
							<Form.Item  name="web_access" > 
								<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
									<ul className="form-display-flex form-padding">
										<li><Radio value={"yes"}>{"Yes"}</Radio></li>
										<li><Radio value={"no"}>{"No"}</Radio></li>
									</ul>
								</Radio.Group>
							</Form.Item>	
						</Col>
					</Row>

					<Row gutter={[16, 16]} className="form-padding-10">
						<Col xs={24} md={12}>
							<div className="form-colored-text"> Are you under any ACC case or criminal case? </div>	
						</Col>
						<Col xs={24} md={12}>
							<Form.Item  name="web_access" > 
								<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
									<ul className="form-display-flex form-padding">
										<li><Radio value={"yes"}>{"Yes"}</Radio></li>
										<li><Radio value={"no"}>{"No"}</Radio></li>
									</ul>
								</Radio.Group>
							</Form.Item>	
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
							<Button>Next </Button>		
						</Col>
					</Row>
					
				</div>


					 
					 
					 
					 
					 
					 
                </Form>
            </div>
        </Fragment>
    );
}
export default React.memo(GARDPPage3);