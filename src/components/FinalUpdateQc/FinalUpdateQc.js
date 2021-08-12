import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "antd/dist/antd.css";
import Select from "react-select";

const options = [
  { value: "", label: "---" },
  { value: "Absent Minded", label: "Absent Minded" },
  { value: "AHT High", label: "AHT High" },
  { value: "Awareness Msg Missing", label: "Awareness Msg Missing" },
  { value: "Brand Msg Missing", label: "Brand Msg Missing" },
  { value: "Close Ending Missing", label: "Close Ending Missing" },
  { value: "Confused When Talking", label: "Confused When Talking" },
  { value: "CRM Not Followed", label: "CRM Not Followed" },
  { value: "Greeting Problem", label: "Greeting Problem" },
  { value: "Listening Problem", label: "Listening Problem" },
  { value: "Mumbling Problem", label: "Mumbling Problem" },
  { value: "Outstanding", label: "Outstanding" },
  { value: "Overlapping", label: "Overlapping" },
  { value: "Pronounciation Problem", label: "Pronounciation Problem" },
  { value: "Speaking Slowly", label: "Speaking Slowly" },
  { value: "Speaking Too Fast", label: "Speaking Too Fast" },
  { value: "Stop Middle Of Talking", label: "Stop Middle Of Talking" },
  { value: "Talking Roughly", label: "Talking Roughly" },
  { value: "Voice Low", label: "Voice Low" },
  { value: "Voice Not Clear", label: "Voice Not Clear" },
  { value: "Wrong CRM Input", label: "Wrong CRM Input" },
];

const FinalUpdateQc = ({ ansData, qcBy }) => {
  console.log(qcBy);
  const [status, setStatus] = useState(false);
  const [remarks, setRemarks] = useState([]);
  const id = ansData._id;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(remarks);
  const finalData = [
    {
      agent: ansData.agentID,
      rating: ansData.rating,
      remarks: remarks,
      qcBy: qcBy,
      callDate: new Date().toLocaleDateString(),
    },
  ];
  console.log(finalData);
  const onSubmit = (data) => {
    data.qcChecked = qcBy;
    data.remarks = remarks;
    data.qcDate = new Date().toLocaleDateString();
    data.qcTime = new Date().toLocaleTimeString();
    console.log(data);
    fetch(`https://enigmatic-tundra-20141.herokuapp.com/finalUpdate/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((output) => {
        setStatus(output);
      });
    fetch("https://enigmatic-tundra-20141.herokuapp.com/reportsData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    window.location.reload(true);
  };

  const handleMultiSelect = (value) => {
    setRemarks(value);
  };

  return (
    <div>
      <h3>Update Survey:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity1">
            <Form.Label>
              <b>Question 1</b>
            </Form.Label>
            <Form.Control
              {...register("answer1")}
              as="select"
              defaultValue={ansData.answer1}
            >
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity2">
            <Form.Label>
              <b>Question 2</b>
            </Form.Label>
            <Form.Control
              {...register("answer2")}
              as="select"
              defaultValue={ansData.answer2}
            >
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity3">
            <Form.Label>
              <b>Question 3</b>
            </Form.Label>
            <Form.Control
              {...register("answer3")}
              as="select"
              defaultValue={ansData.answer3}
            >
              <option>...</option>
              <option value="marise">মেরিস</option>
              <option value="derby">ডার্বি</option>
              <option value="pilot">পাইলট</option>
              <option value="hollywood">হলিউড</option>
              <option value="sheikh">শেখ</option>
              <option value="k2">K2</option>
              <option value="real">রিয়েল</option>
              <option value="royals">রয়েলস</option>
              <option value="others">অন্যান্য</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity4">
            <Form.Label>
              <b>Question 4</b>
            </Form.Label>
            <Form.Control
              {...register("answer4")}
              as="select"
              defaultValue={ansData.answer4}
            >
              <option>...</option>
              <option value="0days">০দিন</option>
              <option value="1days">১দিন</option>
              <option value="2days">২দিন</option>
              <option value="3days">৩দিন</option>
              <option value="4days">৪দিন</option>
              <option value="5days">৫দিন</option>
              <option value="6days">৬দিন</option>
              <option value="7days">৭দিন</option>
              <option value="8days">৮দিন</option>
              <option value="9days">৯দিন</option>
              <option value="10days">১০দিন</option>
              <option value="11days">১১দিন</option>
              <option value="12days">১২দিন</option>
              <option value="13days">১৩দিন</option>
              <option value="14days">১৪দিন</option>
              <option value="15days">১৫দিন</option>
              <option value="3week">৩সপ্তাহ</option>
              <option value="1month">১মাস</option>
              <option value="2month">২মাস</option>
              <option value="3month">৩মাস</option>
              <option value="4month">৪মাস</option>
              <option value="5month">৫মাস</option>
              <option value="6month">৬মাস</option>
              <option value="1year">১বছর</option>
              <option value="1yearplus">১বছরের বেশি</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity5">
            <Form.Label>
              <b>Question 5</b>
            </Form.Label>
            <Form.Control
              {...register("answer5")}
              as="select"
              defaultValue={ansData.answer5}
            >
              <option>...</option>
              <option value="marise">মেরিস</option>
              <option value="derby">ডার্বি</option>
              <option value="pilot">পাইলট</option>
              <option value="hollywood">হলিউড</option>
              <option value="sheikh">শেখ</option>
              <option value="k2">K2</option>
              <option value="real">রিয়েল</option>
              <option value="royals">রয়েলস</option>
              <option value="others">অন্যান্য</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity6">
            <Form.Label>
              <b>Question 6</b>
            </Form.Label>
            <Form.Control
              {...register("answer6")}
              as="select"
              defaultValue={ansData.answer6}
            >
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity7">
            <Form.Label>
              <b>Question 7</b>
            </Form.Label>
            <Form.Control
              {...register("answer7")}
              as="select"
              defaultValue={ansData.answer7}
            >
              <option>...</option>
              <option value="marise">মেরিস</option>
              <option value="others">অন্যান্য</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity8">
            <Form.Label>
              <b>Question 8</b>
            </Form.Label>
            <Form.Control
              {...register("answer8")}
              as="select"
              defaultValue={ansData.answer8}
            >
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity9">
            <Form.Label>
              <b>Question 9</b>
            </Form.Label>
            <Form.Control
              {...register("answer9")}
              as="select"
              defaultValue={ansData.answer9}
            >
              <option>...</option>
              <option value="0">০</option>
              <option value="1">১</option>
              <option value="2">২</option>
              <option value="3">৩</option>
              <option value="4">৪</option>
              <option value="5">৫</option>
              <option value="6">৬</option>
              <option value="7">৭</option>
              <option value="8">৮</option>
              <option value="9">৯</option>
              <option value="10">১০</option>
              <option value="others">অন্যান্য</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity10">
            <Form.Label>
              <b>Question 10</b>
            </Form.Label>
            <Form.Control
              {...register("answer10")}
              as="select"
              defaultValue={ansData.answer10}
            >
              <option>...</option>
              <option value="0packet">০প্যাকেট</option>
              <option value="1packet">১প্যাকেট</option>
              <option value="2packet">২প্যাকেট</option>
              <option value="3packet">৩প্যাকেট</option>
              <option value="4packet">৪প্যাকেট</option>
              <option value="5packet">৫প্যাকেট</option>
              <option value="packet_sales+swaping">প্যাকেট সেলস+সোয়াপিং</option>
              <option value="swaping">সোয়াপিং</option>
              <option value="others">অন্যান্য</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity11">
            <Form.Label>
              <b>Question 11</b>
            </Form.Label>
            <Form.Control
              {...register("answer11")}
              as="select"
              defaultValue={ansData.answer11}
            >
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group as={Col} controlId="formGridCity12">
          <Form.Label>
            <b>Remarks</b>
          </Form.Label>
          <Select
            isMulti
            classNamePrefix="select"
            className="basic-multi-select w-75"
            name="colors"
            options={options}
            onChange={handleMultiSelect}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity13">
          <Form.Label>
            <b>Rating</b>
          </Form.Label>
          <Form.Control
            {...register("rating")}
            as="select"
            defaultValue={ansData.rating}
            className="w-50"
          >
            <option>...</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
            <option value="fail">Fail</option>
          </Form.Control>
        </Form.Group>
        <input className="btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default FinalUpdateQc;
