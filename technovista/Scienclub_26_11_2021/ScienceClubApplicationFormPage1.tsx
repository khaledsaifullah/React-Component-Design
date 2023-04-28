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




const ScienceClubApplicationFormPage1: FC<any> = props => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmitFailed} = useForm(initialState.fields);
    const handleSubmit = (values: any): void => {
        console.log(values);
    }
    return (
        <Fragment>
            <div className="form-page-content form-page-content-registration">
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
                    <div className="bstf-form-loadpictue" style={{ float: 'right', width: '200px', height: '200px', background: 'repeating-linear-gradient(  45deg,  #ebebeb,  #ffffff 3px,  #ffffff 3px,  #f1f1f1 3px)',marginTop: '65px', border: '1.5px solid #611c1ce5' }} ></div>
                    <h2 className="bstf-form-heading">বিজ্ঞানসেবী সংস্থা ও বিজ্ঞাভিত্তিক পেশাজীবী সংগঠন/প্রতিষ্ঠানসমূহের অনুদান প্রদান সংক্রান্ত আবেদন ফরম </h2>
                    <h3 className="bstf-form-title">বিজ্ঞানসেবী সংস্থা/ বিজ্ঞানভিত্তিক পেশাজীবী সংগঠন/প্রতিষ্ঠানের অবস্থান চিহ্নিতকরণ </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={24}>
                            <Form.Item label="সংস্থা/ প্রতিষ্ঠানের নাম" name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <h3 className="bstf-form-title">সংস্থা/ প্রতিষ্ঠানের ঠিকানা </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="বাড়ি ও রাস্তা নং " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="গ্রাম " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="ডাকঘর  " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="উপজেলা/থানা " name="university_institute">
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
                            <Form.Item label="জেলা  " name="university_institute">
                                <Select placeholder=" " >
                                    <Option value={"Dhaka University"}>Dhaka University</Option>
                                    <Option value={"Khulna University"}>Khulan University</Option>
                                    <Option value={"Cumilla University"}>Cumilla University</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="বিভাগ  " name="university_institute">
                                <Select placeholder=" " >
                                    <Option value={"Dhaka University"}>Dhaka University</Option>
                                    <Option value={"Khulna University"}>Khulan University</Option>
                                    <Option value={"Cumilla University"}>Cumilla University</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <h3 className="bstf-form-title form-padding">&nbsp; </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="সংস্থা/ প্রতিষ্ঠানের অফিস ফোন নম্বর " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="সংস্থা/ প্রতিষ্ঠানের অফিস মোবাইল নম্বর " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="সংস্থা/ প্রতিষ্ঠানের অফিস ই-মেইল  " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="ওয়েবসাইট (যদি থাকে) " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>


                    <h3 className="bstf-form-title form-padding">সংস্থা/ প্রতিষ্ঠানের ব্যাংক  ঠিকানা ও হিসাব নম্বর  </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="ব্যাংক " name="university_institute">
                                <Select placeholder=" " >
                                    <Option value={"Dhaka University"}>Dhaka University</Option>
                                    <Option value={"Khulna University"}>Khulan University</Option>
                                    <Option value={"Cumilla University"}>Cumilla University</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="শাখা " name="university_institute">
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
                            <Form.Item label="হিসাবের নাম " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="সংস্থা/সংগঠন/প্রতিষ্ঠানের সাথে সংশ্লিষ্ঠ ব্যাঙ্ক একাউন্ট নম্বর   " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>


                    <h3 className="bstf-form-title form-padding"> আবেদনকারীর পরিচয় চিহ্নিতকরণ </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="আবেদনকারীর নাম  " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="সংস্থা/ প্রতিষ্ঠানে আবেদনকারীর	পদবি  " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>



                    <h3 className="bstf-form-title form-padding">আবেদনকারীর স্থায়ী ঠিকানা  </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="বাড়ি ও রাস্তা নং " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="গ্রাম " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="ডাকঘর  " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="উপজেলা/থানা " name="university_institute">
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
                            <Form.Item label="জেলা  " name="university_institute">
                                <Select placeholder=" " >
                                    <Option value={"Dhaka University"}>Dhaka University</Option>
                                    <Option value={"Khulna University"}>Khulan University</Option>
                                    <Option value={"Cumilla University"}>Cumilla University</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="বিভাগ  " name="university_institute">
                                <Select placeholder=" " >
                                    <Option value={"Dhaka University"}>Dhaka University</Option>
                                    <Option value={"Khulna University"}>Khulan University</Option>
                                    <Option value={"Cumilla University"}>Cumilla University</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>


                    <h3 className="bstf-form-title form-padding">আবেদনকারীর পত্র যোগাযোগের ঠিকানা   </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="বাড়ি ও রাস্তা নং " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="গ্রাম " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="ডাকঘর  " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="উপজেলা/থানা " name="university_institute">
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
                            <Form.Item label="জেলা  " name="university_institute">
                                <Select placeholder=" " >
                                    <Option value={"Dhaka University"}>Dhaka University</Option>
                                    <Option value={"Khulna University"}>Khulan University</Option>
                                    <Option value={"Cumilla University"}>Cumilla University</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="বিভাগ  " name="university_institute">
                                <Select placeholder=" " >
                                    <Option value={"Dhaka University"}>Dhaka University</Option>
                                    <Option value={"Khulna University"}>Khulan University</Option>
                                    <Option value={"Cumilla University"}>Cumilla University</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>


                    <h3 className="bstf-form-title form-padding">&nbsp;</h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="আবেদনকারীর জাতীয় পরিচয়পত্র নম্বর " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="আবেদনকারীর মোবাইল নম্বর " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="আবেদনকারীর ই-মেইল  " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="স্কাইপ আইডি  " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <h3 className="bstf-form-title form-padding">বিজ্ঞানসেবী সংস্থা/প্রতিষ্ঠানের আইনগত মর্যদা নির্ণয়  </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="সংস্থা/ প্রতিষ্ঠান সরকারের কোন দপ্তরে নিবন্ধিত " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="স্বীকৃতি/নিবন্ধনের নং " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <div  className="form-label-topup"> স্বীকৃতি/নিবন্ধনের তারিখ : </div>
                            <Space direction="vertical" size={12}>
                                <DatePicker renderExtraFooter={() => 'extra footer'} />
                            </Space>
                        </Col>
                        <Col xs={24} md={12}>
                            <div  className="form-label-topup"> নিবন্ধন/স্বীকৃতির প্রমানক সংযুক্ত করুন : </div>
                            <Space direction="vertical" size={12}>
                                <Form.Item  name="class_gpa" >
                                    <Input />
                                </Form.Item>
                            </Space>
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
export default React.memo(ScienceClubApplicationFormPage1);