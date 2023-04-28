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

const SpecialResearchGrantPartIV: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
            <div className="form-page-content form-page-content-registration">
				<div className="form-main-title"><span>PART – IV: BUDGET INFORMATION</span></div>
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
                     
				<div className="form-colored-text"> 1. BUDGET </div>
				<div className="form-subheading-bottom-border"> A. Current year  </div>				
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Item Type " name="item_ype">
								<Select placeholder="-- Select --" >
									<Option value={"Male"}>Male</Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>	
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Item Name " name="item_name  " >
								<Input />
							</Form.Item>		
						</Col>
				</Row>
					 
				<Row gutter={[16, 16]}>
						<Col xs={24} md={24}>
							<Form.Item label="Item Cost (thousand Tk)" name="item_cost_thousand_tk)" >
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
					  
				<div className="form-subheading-bottom-border"> B. If the project is expected to last more than one year, please include budget estimates for the total period  </div>	
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Number of Year" name="number_of_year">
								<Select placeholder="-- Select --" >
									<Option value={"Male"}>Male</Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>	
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Item Type " name="item_ype">
								<Select placeholder="-- Select --" >
									<Option value={"Male"}>Male</Option>
									<Option value={"Female"}>Female</Option>
								</Select>
							</Form.Item>	
						</Col>
				</Row>
				
				
				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Item Name " name="item_name  " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Item Cost (1st Year)" name="item_name  " >
								<Input />
							</Form.Item>		
						</Col>
				</Row>

				<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<Form.Item label="Item Cost (2nd Year) " name="item_name  " >
								<Input />
							</Form.Item>		
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Item Cost (3rd Year)" name="item_name  " >
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
				
				
	<div className="form-colored-text"> 2. STATUS OF LEGAL PERSONALITY AND ACCOUNTING SYSTEM </div>			
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
export default React.memo(SpecialResearchGrantPartIV);