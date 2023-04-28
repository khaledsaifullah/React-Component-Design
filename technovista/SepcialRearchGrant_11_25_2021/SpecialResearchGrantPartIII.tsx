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
				<div className="form-colored-title"> 1. SCIENTIFIC BACKGROUND OF THE PROJECT  </div>
				<div className="form-colored-title-samll">A. Significance of the proposed research </div>
				<Row gutter={[16, 16]}>
					<Col xs={24} md={24}>
						<Form.Item  name="comment" >
							<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
						</Form.Item>
					</Col>
				</Row>

				<div className="form-colored-title-samll">B. Related work already performed or in progress at the contracting institution / organization </div>
				<Row gutter={[16, 16]}>
					<Col xs={24} md={24}>
						<Form.Item  name="comment" >
							<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
						</Form.Item>
					</Col>
				</Row>

				<div className="form-colored-title-samll">C. Related work already performed or in progress at other Institutes in the country (If known) </div>
				<Row gutter={[16, 16]}>
					<Col xs={24} md={24}>
						<Form.Item  name="comment" >
							<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
						</Form.Item>
					</Col>
				</Row>


				<div className="form-colored-title-samll">D. References to important related literature relevant to the project (including own publications)  </div>
				<Row gutter={[16, 16]}>
					<Col xs={24} md={24}>
						<Form.Item  name="comment" >
							<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
						</Form.Item>
					</Col>
				</Row>




					<div className="form-subheading-bottom-border">Publications  </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Journal Type " name="university_institute">
								<Select placeholder="National/International " >
									<Option value={"Dhaka University"}>Dhaka University</Option>
									<Option value={"Khulna University"}>Khulan University</Option>
									<Option value={"Cumilla University"}>Cumilla University</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Title" name="class_gpa" >
								<Input />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Publication/Publisher" name="class_gpa" >
								<Input />
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Publication date " name="university_institute">
								<Select placeholder=" " >
									<Option value={"Dhaka University"}>Dhaka University</Option>
									<Option value={"Khulna University"}>Khulan University</Option>
									<Option value={"Cumilla University"}>Cumilla University</Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Publication URL/DOI " name="university_institute">
								<Select placeholder="National/International " >
									<Option value={"Dhaka University"}>Dhaka University</Option>
									<Option value={"Khulna University"}>Khulan University</Option>
									<Option value={"Cumilla University"}>Cumilla University</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Description " name="class_gpa" >
								<Input />
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Author " name="class_gpa" >
								<Input />
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Media File" name="university_institute">
								<Select placeholder="PDF publication file " >
									<Option value={"Dhaka University"}>Dhaka University</Option>
									<Option value={"Khulna University"}>Khulan University</Option>
									<Option value={"Cumilla University"}>Cumilla University</Option>
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
									<th>Journal Type </th>
									<th>Title </th>
									<th>Publication/Publisher </th>
									<th>Publication date </th>
									<th>Description </th>
									<th>Author </th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Test</td>
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
									<td>Test</td>
								</tr>
								<tr>
									<td>Test</td>
									<td>Test</td>
									<td>Test</td>
									<td>Test</td>
									<td>Test</td>
									<td>Test</td>
								</tr>


							</tbody>
						</table>
					</div>



					<div className="form-colored-title"> 2. SCIENTIFIC SCOPE OF THE PROJECT  </div>
					<div className="form-colored-title-samll">A. Research Objectives  </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item  name="comment" >
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
							</Form.Item>
						</Col>
					</Row>

					<div className="form-colored-title-samll"> B. Relationship of these objectives to the present state of knowledge in the field  </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item  name="comment" >
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
							</Form.Item>
						</Col>
					</Row>


					<div className="form-colored-title-samll"> C. Research plan including proposed methods or techniques is going to be used  </div>
					<div className="form-colored-title-samll">1) Plan of action </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item  name="comment" >
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
							</Form.Item>
						</Col>
					</Row>

					<div className="form-colored-title-samll">2) Methodology </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item  name="comment" >
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
							</Form.Item>
						</Col>
					</Row>

					<div className="form-colored-title-samll">3) Time schedule of activities with milestones  </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<div  className="form-colored-title-samll">Name of Milestones : </div>
							<Form.Item  name="class_gpa" >
								<Input />
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<div  className="form-colored-title-samll"> Starting Date : </div>
							<Space direction="vertical" size={12}>
								<DatePicker renderExtraFooter={() => 'extra footer'} />
							</Space>
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<div  className="form-colored-title-samll"> Ending Date (approx.) : </div>
							<Space direction="vertical" size={12}>
								<DatePicker renderExtraFooter={() => 'extra footer'} />
							</Space>
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


					<div className="form-colored-title-samll"> D. How is the project  related to the stated objective of the Special Allocation for Science and Technology programme of the GOB?  </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item  name="comment" >
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
							</Form.Item>
						</Col>
					</Row>



					<div className="form-colored-title-samll"> E. How is the programme related to academic degree programme? (If applicable) (Only for universities/Institutes which awarded degree)  </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item  name="comment" >
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
							</Form.Item>
						</Col>
					</Row>



					<div className="form-colored-title-samll"> F. What outputs from the project can be considered for the assessment of its success? </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item  name="comment" >
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
							</Form.Item>
						</Col>
					</Row>


					<div className="form-colored-title-samll"> G. How does the project contribute in the development of sustainable technology?   </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item  name="comment" >
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
							</Form.Item>
						</Col>
					</Row>



					<div className="form-colored-title-samll"> 3. LIST OF FACILITIES AVAILABLE (Equipment and other facilities including laboratory space)   </div>
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