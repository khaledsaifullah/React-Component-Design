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

const SpecialResearchGrantPartV: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
            <div className="form-page-content form-page-content-registration">
			    <div className="form-main-title"><span>PART – V: PREVIOUS FUNDING INFORMATION UNDER SPECIAL ALLOCATION FROM M/O SCIENCE AND TECHNOLOGY (MOST)</span></div>
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
				<Row gutter={[16, 16]}>
					<Col xs={24} md={12}>
					    <div className="form-display-flex form-get-funding-allocation">
							<div className="form-colored-text form-fontweight-bold"> 1. Did you get any funding under special allocation from MOST since </div>
							<Form.Item  name="item_name  " >
								<Input placeholder="2020-2021" />
							</Form.Item>		
					   </div>
					</Col>
					<Col xs={24} md={12}>
						<div className="form-display-flex">
						<Form.Item name="is_yes" >
							Yes <Checkbox value={1} checked={true} onChange={(event) => console.log(event.target.checked)} > </Checkbox>
						</Form.Item>
						<Form.Item name="is_no" >
							No <Checkbox value={1} checked={true} onChange={(event) => console.log(event.target.checked)} > </Checkbox>
						</Form.Item>
						</div>
					</Col>
				</Row>		
				<div className="form-subheading-bottom-border"> If your answer is no please escape the following sections  </div>	
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="2. Funding year" name="funding_year">
								<Select placeholder="-- Select --" >
									<Option value={"2000"}>2000</Option>
									<Option value={"2001"}>2001</Option>
								</Select>
							</Form.Item>	
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="3. Amount of fund (in Taka)" name="amount_of_fund  " >
								<Input />
							</Form.Item>		
						</Col>
				</Row>

					<Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item label="4. What was the title of the project? " name="what_was_the_title   " >
								<Input />
							</Form.Item>		
						</Col>
					</Row>

				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="5. Project is completed or not?" name="project_is_completed">
								<Select placeholder="-- Select --" >
									<Option value={"2000"}>2000</Option>
									<Option value={"2001"}>2001</Option>
								</Select>
							</Form.Item>	
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="6. If not what is the expected date of completion? " name="if_not_what_expected" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
				
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="7. Already submitted working report or scientific report or not? " name="project_is_completed">
								<Select placeholder="-- Select --" >
									<Option value={"2000"}>2000</Option>
									<Option value={"2001"}>2001</Option>
								</Select>
							</Form.Item>	
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="8. Expected date of submission of Scientific Report? " name="if_not_what_expected" >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
				

				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="9. Any paper published in any International, regional / local journal from this research? " name="project_is_completed">
								<Select placeholder="-- Select --" >
									<Option value={"2000"}>2000</Option>
									<Option value={"2001"}>2001</Option>
								</Select>
							</Form.Item>	
						</Col>
						<Col xs={24} md={12}>
							 		
						</Col>
				</Row>
				
				<div className="form-subheading-bottom-border"> 10. Quote the name of the journal, date of publication and title of the paper.  </div>
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Journal Type " name="journal_type">
								<Select placeholder="-- Select --" >
									<Option value={"2000"}>2000</Option>
									<Option value={"2001"}>2001</Option>
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
							<Form.Item label="Publication/Publisher" name="publication_publisher">
								<Select placeholder="-- Select --" >
									<Option value={"2000"}>2000</Option>
									<Option value={"2001"}>2001</Option>
								</Select>
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
							<Form.Item label="Publication URL/DOI" name="publication_url_doi">
								<Select placeholder="-- Select --" >
									<Option value={"2000"}>2000</Option>
									<Option value={"2001"}>2001</Option>
								</Select>
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
							<Form.Item label="Author" name="author">
								<Select placeholder="-- Select --" >
									<Option value={"2000"}>2000</Option>
									<Option value={"2001"}>2001</Option>
								</Select>
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
export default React.memo(SpecialResearchGrantPartV);