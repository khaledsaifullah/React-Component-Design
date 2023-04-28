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
		    <h2 className="bstf-form-heading">আমদানি/রপ্তানি পারমিটের আবেদন পত্র   </h2>
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
				 
				<h3 className="bstf-form-title"> ৭. আমদানি/রপ্তানি পারমিটের জন্য চাহিত তথ্যাদি  </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="আমদানিকারক /রপ্তানিকারক দেশের নাম  " name="product_state">
									<Select placeholder="  " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সরবরাহকারীর নাম  " name="mobile " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="সরবরাহকারীর ঠিকানা " name="message">
									<TextArea autoSize={{ minRows: 4, maxRows: 5 }} placeholder="Message "   />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="ফোন  *  " name="mobile " >
									<Input />
								</Form.Item>		
								<Form.Item label="ই-মেইল " name="mobile " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<div className="form-display-flex form-padding-10">
									<div className="form-padding-5"> আপনার আমদানীকৃত মালামাল কয়টি শিপমেন্টে আসবে &nbsp; </div>
									<div>
										<Form.Item name="invoice" >
											<Input />
										</Form.Item>
									</div>
								</div>								
							</Col>
							<Col xs={24} md={12}> 
								<div className="form-padding-10 form-text-right"> <a href="#"> <PlusOutlined /> </a>	</div>	
							</Col>
						</Row>	
						<h3 className="bstf-form-sub-title"> নিচের তথ্য পূরণ করার সময় সাবধানে পূরণ করবেন। কারণ এর উপর ভিত্তি করেই পারমিট এর মেয়াদ নির্ধারণ হবে।   </h3>
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="প্রথম প্রেরণের (Consignment) আনুমানিক তারিখ *  " name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="শেষ প্রেরণের (Consignment) আনুমানিক তারিখ  *" name="invoice_date " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="লোডিং (Loading) বন্দরের নাম   *" name="product_state">
									<Select placeholder="  " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="খালাসকারী  বন্দরের নাম  * " name="product_state">
									<Select placeholder="  " >
										<Option value={"Male"}>Male </Option>
										<Option value={"Female"}>Female</Option>
									</Select>
								</Form.Item>
							</Col>

						</Row>	




				</div>



				<h3 className="bstf-form-title"> ৮. তেজস্ক্রিয় পদার্থ আমদানি/রপ্তানির জন্য অতিরিক্ত তথ্যাদি (প্রযোজ্য ক্ষেত্রে পূরণ করুন )  </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="উপাদান ও ভর সংখ্যা  " name="invoice_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="রাসায়নিক এবং/অথবা ভৌত গঠন  " name="invoice_date " >
									<Input />
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