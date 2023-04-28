import React, { FC, Fragment } from 'react'
import {Form, Input, Row, Col, Select, Button, Checkbox, Radio, DatePicker, Space   } from 'antd';
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

const GARDPPage2: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
            <div className="form-page-content form-page-content-registration">
			    <div className="form-main-title"><span> Grants Application for R & D Project  </span></div>
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
                     
				<div className="form-subheading-bottom-border"> Part 3 : Identification of project category   </div>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<div className="form-colored-text"> Are you applying for   </div>	
								</Col>
								<Col xs={24} md={12}>
									<Form.Item  name="web_access" > 
										<Radio.Group value={['a_new_project', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
							 				<ul className="form-display-flex form-padding">
												<li><Radio value={"a_new_project"}>{"a New Project"}</Radio></li>
												<li><Radio value={"renewal_of_an_ongoing_project"}>{"Renewal of an ongoing project"}</Radio></li>
											</ul>
										</Radio.Group>
									</Form.Item>	
								</Col>
						</Row>
						<div className="form-subheading-bottom-border"> If a new project   </div>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Duration of the project " name="duration_ofthe_project">
										<Select placeholder="1(One) year/2 (two) years/3 (three) years " >
											<Option value={"Male"}>Male </Option>
											<Option value={"Female"}>Female</Option>
										</Select>
									</Form.Item>	
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="1st Financial Year " name="1st_financial_year">
										<Select placeholder=" " >
											<Option value={"Male"}>Male </Option>
											<Option value={"Female"}>Female</Option>
										</Select>
									</Form.Item>	
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="2nd Financial Year " name="2nd_financial_year">
										<Select placeholder=" " >
											<Option value={"Male"}>Male </Option>
											<Option value={"Female"}>Female</Option>
										</Select>
									</Form.Item>	
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="3rd Financial Year " name="3rd_financial_year">
										<Select placeholder=" " >
											<Option value={"Male"}>Male </Option>
											<Option value={"Female"}>Female</Option>
										</Select>
									</Form.Item>	
								</Col>
						</Row>
						<div className="form-subheading-bottom-border"> If renewal of an ongoing project   </div>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Year of renewal you are applying for " name="2nd_financial_year">
										<Select placeholder="2nd year/3rd year" >
											<Option value={"Male"}>Male </Option>
											<Option value={"Female"}>Female</Option>
										</Select>
									</Form.Item>	
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="Name of the project as it was " name="name_ofthe_project_asitwas" >
										<Input />
									</Form.Item>		
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Last year s ID number " name="last_year_id_number" >
										<Input />
									</Form.Item>		
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="The amount of grant you received last year " name="theamount_of_grant_youreceived_lastyear" >
										<Input />
									</Form.Item>		
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="The financial year you received the grant " name="thefinancial_yearyou_received_thegrant" >
										<Input />
									</Form.Item>		
								</Col>
								<Col xs={24} md={12}>
									<div className="form-colored-text"> Did you submit financial report to MoST? </div>
									<Form.Item  name="web_access" > 
										<Radio.Group value={['yes', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
											<ul className="form-display-flex form-padding">
												<li><Radio value={"yes"}>{"Yes"}</Radio></li>
												<li><Radio value={"no"}>{"No"}</Radio></li>
											</ul>
										</Radio.Group>
									</Form.Item>	
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
						
					<div className="form-subheading-bottom-border"> Did you received grant before any time?    </div>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Financial year " name="financial_year">
									<Select placeholder="2nd year/3rd year" >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="The name of the project you implemented " name="thename_ofthe_project_you_implemented" >
									<Input />
								</Form.Item>		
							</Col>
					</Row>

				
				</div>				
					 
					 

				<div className="form-subheading-bottom-border"> Part 4: Researchers official identity   </div>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<div className="form-colored-text">Are you applying on behalf of an organization?  		</div>
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
						<div className="form-subheading-bottom-border"> If Yes, Please provide details information of the organization     </div>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Name of the organization " name="name_ofthe_organization" >
										<Input />
									</Form.Item>		
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="Address " name="address" >
										<Input />
									</Form.Item>		
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Web Address " name="web_address" >
										<Input />
									</Form.Item>		
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="Telephone " name="telephone" >
										<Input />
									</Form.Item>		
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Mobile " name="mobile" >
										<Input />
									</Form.Item>		
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="Email " name="email" >
										<Input />
									</Form.Item>		
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
								<Form.Item label="Category of your organization " name="category_of_your_organization">
									<Select placeholder="Public/Private " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="If private, is the organization registered? " name="ifprivate_isthe_organization_registered?">
										<Select placeholder="Yes/No" >
											<Option value={"Yes"}>Yes </Option>
											<Option value={"No"}>No </Option>
										</Select>
									</Form.Item>	
								</Col>
						</Row>
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="If yes, please provide name of the office it registered with " name="ifyes_pleaseprovide_name_oftheoffice_registered" >
										<Input />
									</Form.Item>		
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="Your official position in the organization " name="your_official_position_inthe_organization" >
										<Input />
									</Form.Item>		
								</Col>
						</Row>

						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Are you applying as an individual researcher? " name="areyou_applying_asan_individual_researcher">
										<Select placeholder="Yes/No" >
											<Option value={"Yes"}>Yes </Option>
											<Option value={"No"}>No </Option>
										</Select>
									</Form.Item>	
								</Col>
								<Col xs={24} md={12}>
									 		
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
export default React.memo(GARDPPage2);