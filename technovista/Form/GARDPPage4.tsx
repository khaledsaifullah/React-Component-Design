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

const GARDPPage4: FC<any> = props => {
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
				<div className="form-subheading-bottom-border"> Part 8 : Merit and usefulness of the research project   </div>
				<div className="form-childform-content">                     
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Which type can your proposed research work be fall in? " name="whichtype_proposed_research">
									<Select placeholder="Scientific / Social" >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Provide the address/location your project can be inspected " name="provide_address_project" >
									<Input />
								</Form.Item>		
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
									<Form.Item label="Which of the following do your research work base on? (please Select) " name="which_research">
										<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
									</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
									<Form.Item label="Provide 02 objectives of your research " name="provide_objective_research">
										<TextArea autoSize={{ minRows: 3, maxRows: 5 }}  placeholder="1. [in 03 catchy words] ............  2. [in 03 catchy words] ............"  />
									</Form.Item>		
							</Col>
					</Row>
					
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
						    <div className="form-colored-text form-padding-15"> Mention the time schedule of your research project, Date of Start  </div>
							<div className="form-display-flex form-padding-10">
								<div  className="form-start-date">
									<div>Start Date:</div>
									<Space direction="vertical" size={12}>
										<DatePicker renderExtraFooter={() => 'extra footer'} />
									</Space>		
								</div>
								<div  className="form-end-date">
									<div>End Date:</div>
									<Space direction="vertical" size={12}>
										<DatePicker renderExtraFooter={() => 'extra footer'} />
									</Space>		
								</div>
							</div>
						</Col>
					</Row>
					
					<div className="form-subheading-bottom-border"> Impact area of the research project   </div>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							The name(s) of industry(s)/ impact area(s) your research project can be best
							and most useable						
						</Col>
						<Col xs={24} md={12}>
							The names of 02 research projects already done by you or any other
							researchers that can be considered as close to the research project you
							applying for						
						</Col>
					</Row>
					
					
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<div className="form-plus-btn"> <a href="javascript:void(0)">+</a> </div>
							<div className="form-clone-content"> 
								<div className="form-clone-input">
									<Form.Item  name="number_data" >
										<Input />
									</Form.Item>
								</div> 
								<div className="form-clone-input">
									<Form.Item  name="number_data" >
										<Input />
									</Form.Item>
								</div> 
							</div>
						</Col>
						<Col xs={24} md={12}>
							<div className="form-plus-btn"> <a href="javascript:void(0)">+</a> </div>
							<div className="form-clone-content"> 
								<div className="form-clone-input">
									<Form.Item  name="number_data" >
										<Input />
									</Form.Item>
								</div> 
								<div className="form-clone-input">
									<Form.Item  name="number_data" >
										<Input />
									</Form.Item>
								</div> 
							</div>
						</Col>
					</Row>
					

					 
				</div>


				<div className="form-subheading-bottom-border"> Part 9: Estimated cost of the project   </div>
				<div className="form-childform-content"> 
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Item Type" name="item_type">
									<Select placeholder=" " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>	
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Item Type" name="item_type" >
									<Input />
								</Form.Item>		
							</Col>
					</Row>
					<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="Item Cost (thousand Tk) " name="item_cost" >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="Remarks" name="remarks" >
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
export default React.memo(GARDPPage4);