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

const GARDPPage3: FC<any> = props => {
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
				<div className="form-subheading-bottom-border"> Part 5 : Information related to research proposal   </div>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
								<Col xs={24} md={12}>
									<Form.Item label="Title of the research" name="title_ofthe_research">
										<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
									</Form.Item>		
								</Col>
								<Col xs={24} md={12}>
									<div className="form-colored-text"> Select the category for your project </div>
									<Form.Item  name="web_access" > 
										<Radio.Group value={['biology_medicine_nutrition', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
											<ul className="form-display-flex form-padding">
												<li><Radio value={"biology_medicine_nutrition"}>{"Biology, Medicine and Nutrition"}</Radio></li>
												<li><Radio value={"engineering_electronics_energy"}>{"Engineering, Electronics and Energy"}</Radio></li>
											</ul>
										</Radio.Group>
									</Form.Item>	
									<Form.Item  name="web_access" > 
										<Radio.Group value={['physical_sciences', 'renewal_of_an_ongoing_project']} onChange={(value) => console.log(value)}>
											<ul className="form-display-flex form-padding">
												<li><Radio value={"physical_sciences"}>{"Physical sciences"}</Radio></li>
												<li><Radio value={"food,_agriculture_environment"}>{"Food, Agriculture and Environment"}</Radio></li>
											</ul>
										</Radio.Group>
									</Form.Item>	
									 
									 
								</Col>
						</Row>
				</div>                    
				
				<div className="form-subheading-bottom-border"> Part 6 : Applicant’s academic information   </div>
				<div className="form-childform-content">
					<div className="form-subheading-bottom-border"> Applicant’s Schooling Record   </div>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="University/Institute " name="university_institute">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Country " name="country">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Name of Examination " name="name_of_examination">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Group/Subject/Department  " name="group_subject_department ">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Class/GPA/CGPA " name="Class_gpa_cgpa">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Year of Passing  " name="year_of_passing">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
					</Row>
					<div className="form-add-btn">
						 <Button>+ Add</Button>		
					</div>
					<div className="form-table-design">
							<table>
							  <thead>
								<tr>
								  <th>Subject</th>
								  <th>Name of Degree</th>
								  <th>University/Institute</th>
								  <th>Country</th>
								  <th>Class/GPA</th>
								</tr>
							  </thead>
							  <tbody>
								<tr>
								  <td>Test</td>
								  <td>Test</td>
								  <td>Test</td>
								  <td>Test</td>
								  <td>Test</td>
								</tr>
								<tr>
								  <td>Test</td>
								  <td>Test</td>
								  <td>Test</td>
								  <td>Test</td>
								  <td>Test</td>
								</tr>
							  </tbody>      
							</table>
					</div>
				
					
				</div> 				
					 
				<div className="form-subheading-bottom-border"> Part 7 : Applicant’s research aptitude and experience   </div>
				<div className="form-childform-content">
					<div className="form-subheading-bottom-border"> Applicant’s research aptitude   </div>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Do you have any published article in any peer review journal? " name="doyou_haveany_published_journal">
									<Select placeholder="Yes/No " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="If yes, how many publication? " name="last_year_id_number" >
									<Input />
								</Form.Item>		
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Mention the name of the journal " name="last_year_id_number" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>

							</Col>
					</Row>
					<div className="form-subheading-bottom-border"> Applicant’s research aptitude   </div>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Are you a salaried researcher in any organization? " name="published_journal">
									<Select placeholder="Yes/No " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Are you a teaching faculty in any university or alike institution? " name="published_journal">
									<Select placeholder="Yes/No " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
					</Row>
					
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Did you lead any research project in last two years? " name="published_journal">
									<Select placeholder="Yes/No " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Did you complete any project granted by MoST else before? " name="published_journal">
									<Select placeholder="Yes/No " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="If yes, how many and when?  " name="last_year_id_number" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Do you have any mentionable innovation? " name="published_journal">
									<Select placeholder="Yes/No " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="If yes, please select the type of innovation " name="published_journal">
									<Select placeholder="Technological/Theoretical " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
									<Form.Item label="Please describe area of application of the innovation in two sentences " name="title_ofthe_research">
										<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
									</Form.Item>		
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
									<Form.Item label="If your answer is ‘no’ to all of the above questions then write 03 sentences as
to how you consider yourself as an researcher? " name="title_ofthe_research">
										<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
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
export default React.memo(GARDPPage3);