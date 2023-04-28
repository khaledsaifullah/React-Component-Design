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




const ScienceClubApplicationFormPage2: FC<any> = props => {
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
                <h2 className="bstf-form-heading">বিজ্ঞানসেবী সংস্থা ও বিজ্ঞানভিত্তিক পেশাজীবী সংগঠন/প্রতিষ্ঠানসমূহের অনুদান প্রদান সংক্রান্ত আবেদন ফরম  </h2>
                 <h3 className="bstf-form-title"> বিজ্ঞানসেবী সংস্থা /প্রতিষ্ঠানের বিদ্যমান কমিটি চিহ্নিতকরণ  </h3>
                <div className="form-label-topup">অব্যবহিত পূর্ব বছরে কমিটির ০২টি সভার রেজুলেশন সংযুক্ত করুন</div>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Form.Item name="class_gpa" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item  name="class_gpa" >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <h3 className="bstf-form-title form-padding">বিদ্যমান কমিটির প্রধান ০৩ জনের পরিচয়	লিখুন </h3>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Form.Item label="সভাপতির নাম " name="class_gpa" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="সভাপতির মোবাইল নং " name="class_gpa" >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Form.Item label="সাধারন সম্পাদকের নাম ও মোবাইল নং " name="class_gpa" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="সাধারন সম্পাদকের মোবাইল নং  " name="class_gpa" >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
               <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Form.Item label="ক্যাশিয়ারের নাম  " name="class_gpa" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="ক্যাশিয়ারের  মোবাইল নং " name="class_gpa" >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
               <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <div className="form-label-topup form-margin-top-23">বিদ্যমান কমিটি গঠণের রেজুলেশন সংযুক্ত করুণ</div>
                        <Form.Item   name="class_gpa" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <div className="form-label-topup">ইউএনও/উপজেলা শিক্ষা কর্মকর্তা/স্থানীয় সরকারি কলেজের পিন্সিপাল/বিশ্ববিদ্যালয়ের সংশ্লিষ্ট প্রক্টরের সুপারিশপত্র সংযুক্ত করুন </div>
                        <Form.Item   name="class_gpa" >
                            <Input />
                        </Form.Item>
                    </Col>

                </Row>


                <h3 className="bstf-form-title form-padding">বিজ্ঞাসেবী সং‌স্থা/প্রতিষ্ঠানের সক্রিয়তা নির্ণয় </h3>
                <h3 className="bstf-form-title form-padding">গত অর্থবছরে সংস্থা/প্রতিষ্ঠান কর্তৃক বাস্তবায়িত বিজ্ঞান সচেতনতামূলক কার্যক্রম উল্লেখ করুন  </h3>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Form.Item label="বাস্তবায়িত কার্যক্রমের নাম " name="university_institute">
                            <Select placeholder=" " >
                                <Option value={"Dhaka University"}>Dhaka University</Option>
                                <Option value={"Khulna University"}>Khulan University</Option>
                                <Option value={"Cumilla University"}>Cumilla University</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="তারিখ " name="class_gpa" >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="বাস্তবায়নের স্থান " name="class_gpa" >
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


                    <h3 className="bstf-form-title form-padding">ইতোপূর্বে অত্র মন্ত্রণালয় থেকে অনুদান পেয়ে থাকলে তা সদব্যবহার সম্পর্কে নিম্নোক্ত তথ্য দিন </h3>
                    <Row gutter={[16, 16]}>
                         <Col xs={24} md={12}>
                            <Form.Item label="বিগত অর্থবছরে অনুদান প্রাপ্ত হয়েছেন কি না" name="university_institute">
                                <Select placeholder="হ্যাঁ / না " >
                                    <Option value={"yes"}>হ্যাঁ </Option>
                                    <Option value={"no"}>না  </Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>



                    <h3 className="bstf-form-title form-padding"> প্রার্থিত অনুদানের উদ্দেশ্য ও ব্যয় যৌক্তিকতা নিরূপণ  </h3>
                    <h3 className="bstf-form-title form-padding">প্রার্থিত অনুদান ব্যবহার করে যে সকল বিজ্ঞান সচেতনতামূলক কাজ বাস্তবায়নের পরিকল্পনা
                        রয়েছে সেসকল  কাজের নাম, সম্ভাব্য বাস্তবায়ন তারিখ, স্থান ও সম্ভাব্য ব্যয় উল্লেখ করুন
                    </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="পরিকল্পনাধীন কার্যক্রমের নাম " name="university_institute">
                                <Select placeholder=" " >
                                    <Option value={"Dhaka University"}>Dhaka University</Option>
                                    <Option value={"Khulna University"}>Khulan University</Option>
                                    <Option value={"Cumilla University"}>Cumilla University</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="তারিখ " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="বাস্তবায়নের স্থান " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="সম্ভাব্য ব্যয় " name="class_gpa" >
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


                    <h3 className="bstf-form-title">অঙ্গিকারনামা সংক্রান্ত </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <div className="bstf-form-text">আমি প্রতিষ্ঠানের পক্ষে এ আবেদন দাখিল করছি </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="web_access"
                                className="bstf-text-with-radio"
                            >
                                <Radio.Group
                                    value={['item1', 'item2']}
                                    onChange={(value) => console.log(value)}
                                >
                                    <ul>
                                        <li><Radio value={"item1"}>{"হ্যাঁ"}</Radio></li>
                                        <li><Radio value={"item2"}>{"না"}</Radio></li>
                                    </ul>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <div className="bstf-form-text"> অনুদান প্রাপ্ত হলে, আমি আবেদনে বর্ণিত বিজ্ঞান সচেতনতা কার্যক্রম বাস্তবায়ন সম্পন্ন করব এবং বিল ভাউচার সহ প্রতিবেদন এবং বাস্তবায়িত কার্যক্রমের সংক্ষিপ্ত বিবরণ সময়মতো মন্ত্রণালয়ে পাঠাব </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="web_access"
                                className="bstf-text-with-radio"
                            >
                                <Radio.Group
                                    value={['item1', 'item2']}
                                    onChange={(value) => console.log(value)}
                                >
                                    <ul>
                                        <li><Radio value={"item1"}>{"হ্যাঁ"}</Radio></li>
                                        <li><Radio value={"item2"}>{"না"}</Radio></li>
                                    </ul>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>
                    <h3 className="repeat-promise-title">আমি পুনরায় নিচের তথ্যগুলো নিশ্চিত করছি</h3>



                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="সংস্থা / প্রতিষ্ঠানের পদ  " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="মোবাইল নম্বর  " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>



                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="এনআইডি  " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="ই-মেইল   " name="class_gpa" >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>



                    <Row gutter={[16, 16]} className="form-padding-10">
                        <Col xs={24} md={12}>
                            <div className="bstf-form-text">আমি এ মর্মে হলফ করছি যে, উপরে যে সব তথ্য পরিবেশিত হয়েছে তা সঠিক ও সত্য।  </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="web_access"
                                className="bstf-text-with-radio"
                            >
                                <Radio.Group
                                    value={['item1', 'item2']}
                                    onChange={(value) => console.log(value)}
                                >
                                    <ul>
                                        <li><Radio value={"item1"}>{"হ্যাঁ"}</Radio></li>
                                        <li><Radio value={"item2"}>{"না"}</Radio></li>
                                    </ul>
                                </Radio.Group>
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
                                <Button>Print Preview</Button>
                            </Col>
                        </Row>
                    </div>


                </Form>

            </div>

        </Fragment>
    );
}
export default React.memo(ScienceClubApplicationFormPage2);