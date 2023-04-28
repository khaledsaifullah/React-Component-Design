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

const SpecialResearchGrantPartIII: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
            <div className="form-page-content form-page-content-registration">
			<div className="form-main-title"><span>PART – III: TECHNICAL INFORMATION</span></div>
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
                     
					 
					 				<div className="project-personal-detail">	 
				<div className="form-colored-title"> 1. PROJECT PERSONNEL </div>
                <div className="form-colored-text"> A. Principal Investigator (AI) </div>				
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Name" name="name" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Sex" name="sex">
								<Select placeholder="-- Select --" >
									<Option value={"Male"}>Male</Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>	
						</Col>
				</Row>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Date of Birth" name="date_of_birth" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Position" name="position" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Position held (since)" name="position_held_since" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="E-mail" name="e-mail" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>

				<Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item label="Mobile Number" name="mobile_mumber" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>

				<div className="form-subheading-bottom-border">Present Address </div>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="House & Road No." name="house_road_no" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Village" name="village" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>					
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Post Office" name="post_office" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Upazilla/Thana" name="upazilla_thana">
								<Select placeholder="-- Select --" >
									<Option value={"Dhaka"}>Dhaka</Option>
									<Option value={"Khulna"}>Khulan</Option>
									<Option value={"Cumilla"}>Cumilla</Option>
								</Select>
							</Form.Item>	
							
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="District" name="district">
								<Select placeholder="-- Select --" >
									<Option value={"Dhaka"}>Dhaka</Option>
									<Option value={"Khulna"}>Khulan</Option>
									<Option value={"Cumilla"}>Cumilla</Option>
								</Select>
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Division" name="division">
								<Select placeholder="-- Select --" >
									<Option value={"Dhaka"}>Dhaka</Option>
									<Option value={"Khulna"}>Khulan</Option>
									<Option value={"Cumilla"}>Cumilla</Option>
								</Select>
							</Form.Item>			
						</Col>
					</Row>
					 
				<div className="form-subheading-bottom-border form-subheading-iscontent">
					<div className="form-subheading-leftpart">Parmanent Address </div>
					<div  className="form-subheading-rightpart">
						<Form.Item name="is_present_permanent_address_same" >
							<Checkbox value={1} checked={true} onChange={(event) => console.log(event.target.checked)} >
								Is Present & Permanent address same?
							</Checkbox>
						</Form.Item>
				 	</div>   				
				</div>
				   <Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="House & Road No." name="house_road_no" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Village" name="village" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>					
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Post Office" name="post_office" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Upazilla/Thana" name="upazilla_thana">
								<Select placeholder="-- Select --" >
									<Option value={"Dhaka"}>Dhaka</Option>
									<Option value={"Khulna"}>Khulan</Option>
									<Option value={"Cumilla"}>Cumilla</Option>
								</Select>
							</Form.Item>	
							
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="District" name="district">
								<Select placeholder="-- Select --" >
									<Option value={"Dhaka"}>Dhaka</Option>
									<Option value={"Khulna"}>Khulan</Option>
									<Option value={"Cumilla"}>Cumilla</Option>
								</Select>
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Division" name="division">
								<Select placeholder="-- Select --" >
									<Option value={"Dhaka"}>Dhaka</Option>
									<Option value={"Khulna"}>Khulan</Option>
									<Option value={"Cumilla"}>Cumilla</Option>
								</Select>
							</Form.Item>			
						</Col>
					</Row>

					 
				<div className="form-subheading-bottom-border">Academic Degrees Held </div>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="University/Institute" name="university_institute">
								<Select placeholder="-- Select --" >
									<Option value={"Dhaka University"}>Dhaka University</Option>
									<Option value={"Khulna University"}>Khulan University</Option>
									<Option value={"Cumilla University"}>Cumilla University</Option>
								</Select>
							</Form.Item>			
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Country" name="country">
								<Select placeholder="-- Select --" >
									<Option value={"USA"}>USA</Option>
									<Option value={"UK"}>UK</Option>
									<Option value={"Poland"}>Poland</Option>
								</Select>
							</Form.Item>			
						</Col>
					</Row>					
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Name of Degree" name="name_of_degree">
								<Select placeholder="-- Select --" >
									<Option value={"SSC"}>SSC</Option>
									<Option value={"HSC"}>HSC</Option>
									<Option value={"BSC"}>BSC</Option>
								</Select>
							</Form.Item>			
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Subject" name="subject">
								<Select placeholder="-- Select --" >
									<Option value={"Science"}>Science</Option>
									<Option value={"Arts"}>Arts</Option>
									<Option value={"Commerce"}>Commerce</Option>
								</Select>
							</Form.Item>			
						</Col>
					</Row>					
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Class/GPA" name="class_gpa" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Year of Graduation" name="year_of_graduation">
								<Select placeholder="-- Select --" >
									<Option value={"1996"}>Dhaka</Option>
									<Option value={"1997"}>Khulan</Option>
									<Option value={"1998"}>Cumilla</Option>
								</Select>
							</Form.Item>			
						</Col>
					</Row>					


</div>
					

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
					  


					<div className="form-subheading-bottom-border"> Previous Experience </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Type of Experience" name="type_of_experience">
								<Select placeholder="-- Select --" >
									<Option value={"1996"}>Dhaka</Option>
									<Option value={"1997"}>Khulan</Option>
									<Option value={"1998"}>Cumilla</Option>
								</Select>
							</Form.Item>			
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Title" name="title" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>						
					
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Employee Type" name="employee_type">
								<Select placeholder="-- Select --" >
									<Option value={"1996"}>Dhaka</Option>
									<Option value={"1997"}>Khulan</Option>
									<Option value={"1998"}>Cumilla</Option>
								</Select>
							</Form.Item>			
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Name of the Institute" name="name_ofthe_institute" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>						
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Location" name="location">
								<Select placeholder="-- Select --" >
									<Option value={"1996"}>Dhaka</Option>
									<Option value={"1997"}>Khulan</Option>
									<Option value={"1998"}>Cumilla</Option>
								</Select>
							</Form.Item>			
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Description" name="Description" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>						
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Duration (From Date)" name="duration_from_date)" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Duration (To Date)" name="duration_to_date)" >
								<Input />
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




					<div className="form-subheading-bottom-border"> Training/Seminar/Courses Info  </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Type" name="type">
								<Select placeholder="-- Select --" >
									<Option value={"1996"}>Dhaka</Option>
									<Option value={"1997"}>Khulan</Option>
									<Option value={"1998"}>Cumilla</Option>
								</Select>
							</Form.Item>			
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Title" name="title" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>						
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Name of the Institute" name="name_ofthe_institute">
								<Select placeholder="-- Select --" >
									<Option value={"1996"}>Dhaka</Option>
									<Option value={"1997"}>Khulan</Option>
									<Option value={"1998"}>Cumilla</Option>
								</Select>
							</Form.Item>			
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Field of Study/Subject" name="field_of_study_subject" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>						
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Start Year" name="start_year" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="End Year (or expected)" name="end_year_or_expected)" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>						
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Result" name="result" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Related/Reference URL " name="related_reference_url" >
								<Input />
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






					<div className="form-subheading-bottom-border"> Awards & Scholarship  </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Type" name="type">
								<Select placeholder="-- Select --" >
									<Option value={"1996"}>Dhaka</Option>
									<Option value={"1997"}>Khulan</Option>
									<Option value={"1998"}>Cumilla</Option>
								</Select>
							</Form.Item>			
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Title" name="title" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>						
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Name of the Institute" name="name_ofthe_institute">
								<Select placeholder="-- Select --" >
									<Option value={"1996"}>Dhaka</Option>
									<Option value={"1997"}>Khulan</Option>
									<Option value={"1998"}>Cumilla</Option>
								</Select>
							</Form.Item>			
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Year" name="year" >
								<Input />
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

					<div className="form-subheading-bottom-border"> Publications  </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Journal Type " name="journal_type ">
								<Select placeholder="-- Select --" >
									<Option value={"1996"}>Dhaka</Option>
									<Option value={"1997"}>Khulan</Option>
									<Option value={"1998"}>Cumilla</Option>
								</Select>
							</Form.Item>			
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Title" name="title" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>						

					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Publication/Publisher" name="publication_publisher" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Publication date" name="publication_date" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>						


					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Publication URL/DOI" name="publication_url_doi" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Description" name="description" >
								<Input />
							</Form.Item>		
						</Col>
					</Row>						


					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Author" name="author" >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Media File" name="media_file" >
								<Input />
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


<div className="form-subheading-bottom-border"> C. Other Staff [which includes PhD /M.Phil. / MS or equivalent degrees (Research) student in the relevant field] (Applicable for Universities/Institutes which
award academic degrees </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item  name="comment" >
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
							</Form.Item>		
						</Col>
					</Row>







					<div className="form-btn-group">
					  <Row gutter={[16, 16]}>
							<Col xs={8} md={8} className="form-back-btn">
								 <Button>Back</Button>		
							</Col>
							<Col xs={8} md={8}  className="form-save-btn">
							 	<Button>Save</Button>		
							</Col>
							<Col xs={8} md={8}  className="form-next-btn">
							 	<Button>Next</Button>		
							</Col>
						</Row>
						
					</div>
					 
					 
					 
					 
					 
                </Form>
            </div>
        </Fragment>
    );
}
export default React.memo(SpecialResearchGrantPartIII);