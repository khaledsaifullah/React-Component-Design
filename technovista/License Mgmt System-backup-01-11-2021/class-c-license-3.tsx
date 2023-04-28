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
				<h3 className="bstf-form-title"> ১. বিকিরণকারী যন্ত্রপাতি ব্যবহারের উদ্দেশ্য ও যৌক্তিকতা   </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item  name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }}    />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তি   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
				</div>
 
 
 
				<h3 className="bstf-form-title"> ২. স্থান, স্থানের লে -আউট (Layout) , বিকিরণ সংশ্লিষ্ট কক্ষ ও কাঠামোসমূহের নির্মাণ পরিকল্পনা এবং নক্শা সম্পর্কিত তথ্য  </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item  name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }}    />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তি   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
				</div>
 
 
 
				<h3 className="bstf-form-title"> ৩. গৃহীতব্য পরিচালনা ও রক্ষণাবেক্ষণ কর্মসূচির বিবরণ   </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item  name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }}    />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তি   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
				</div>
 
 
 
				<h3 className="bstf-form-title"> ৪. গৃহীতব্য মান নিশ্চিতকরণ (Q.A.)  কর্মসূচির বিবরণ  </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item  name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }}    />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তি   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
				</div>
 
 
				<h3 className="bstf-form-title"> ৫. নির্মাণ, পরীক্ষণ এবং সংস্থাপনের সময়সূচি, প্রযোজ্য ক্ষেত্রে   </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item  name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }}    />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তি   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
				</div>
 
 
				<h3 className="bstf-form-title"> ৬. সাংগঠনিক কাঠামোর  (Organogram) কপিসহ বিকিরণকারী যন্ত্রপাতির প্ৰশাসনিক নিয়ন্ত্রণ রূপরেখার বিবরণ  </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item  name="message">
									<TextArea autoSize={{ minRows: 3, maxRows: 5 }}    />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="সংযুক্তি   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
				</div>
 
 
				<h3 className="bstf-form-title"> ৭. বিকিরণকারী যন্ত্রপাতির ব্যবহার তত্বাবধানকারীর বিবরণ  </h3>
				<div className="form-childform-content">
						<Row gutter={[16, 16]}>
							<Col xs={24} md={12}>
								<Form.Item label="নাম   " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
							<Col xs={24} md={12}>
								<Form.Item label="পদবী  " name="licence_number " >
									<Input />
								</Form.Item>		
							</Col>
						</Row>	
					<Row gutter={[16, 16]}>
						<Col xs={24} md={12}>
							<div className="form-padding-10"> জন্ম তারিখ </div>
							<div className="form-padding-10">
								<Space direction="vertical" size={12}>
									<DatePicker renderExtraFooter={() => 'extra footer'} />
								</Space>							
							</div>
						</Col>	
						<Col xs={24} md={12}>
							<div className="form-padding-10"> পরিচিতি  </div>
							<div className="form-padding-10">
								<Form.Item   name="licence_number " >
									<Input />
								</Form.Item>	
							</div>							
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