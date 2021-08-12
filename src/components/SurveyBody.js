import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "antd/dist/antd.css";
import { consumerContext } from "../App";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const SurveyBody = () => {
  const [searchNumber, setSearchNumber] = useState(null);
  const [consumer, setConsumer] = useContext(consumerContext);
  const [notFound, setNotFound] = useState(false);
  console.log(consumer);
  console.log(searchNumber);
  const [q1, setQ1] = useState(null);
  const [consumerNewName, setConsumerNewName] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q6, setQ6] = useState(null);
  const [q7, setQ7] = useState(null);
  const [q11, setQ11] = useState(null);
  const [q12, setQ12] = useState(null);
  const [q13, setQ13] = useState(null);
  const [q14, setQ14] = useState(null);
  const [q15, setQ15] = useState(null);

  const [q4aValue1, setQ4aValue1] = useState("");
  const [q4aValue2, setQ4aValue2] = useState("");
  const [q4aValue3, setQ4aValue3] = useState("");
  const [q4aValue4, setQ4aValue4] = useState("");
  const [q4aValue5, setQ4aValue5] = useState("");
  const [q4aValue6, setQ4aValue6] = useState("");

  const [q4bValue1, setQ4bValue1] = useState("");
  const [q4bValue2, setQ4bValue2] = useState("");

  const [q4cValue1, setQ4cValue1] = useState("");
  const [q4cValue2, setQ4cValue2] = useState("");
  const [q4cValue3, setQ4cValue3] = useState("");
  const [q4cValue4, setQ4cValue4] = useState("");
  const [q4cValue5, setQ4cValue5] = useState("");
  const [q4cValue6, setQ4cValue6] = useState("");
  const [q4cValue7, setQ4cValue7] = useState("");

  const [callStatus, setCallStatus] = useState(null);

  const handleText = (e) => {
    setSearchNumber(e.target.value);
  };
  console.log([q4bValue1, q4bValue2]);
  const handleSearch = () => {
    fetch(`http://192.168.10.11:5005/dMatched/${searchNumber}`)
      .then((res) => res.json())
      .then((data) => setConsumer(data));
    setNotFound(true);
  };
  const q1value = (e) => {
    setQ1(e.target.value);
  };
  const consumerName = (e) => {
    setConsumerNewName(e.target.value);
  };
  const q2value = (e) => {
    setQ2(e.target.value);
  };
  const q3value = (e) => {
    console.log(e.target.value);
    setQ3(e.target.value);
  };
  const q4value = (e) => {
    setQ4(e.target.value);
  };
  const q5value = (e) => {
    setQ5(e.target.value);
  };
  const q6value = (e) => {
    setQ6(e.target.value);
  };
  const q7value = (e) => {
    console.log(e.target.value);
    setQ7(e.target.value);
  };
  const q11value = (e) => {
    setQ11(e.target.value);
  };
  const q12value = (e) => {
    setQ12(e.target.value);
  };
  const q13value = (e) => {
    setQ13(e.target.value);
  };
  const q14value = (e) => {
    setQ14(e.target.value);
  };
  const q15value = (e) => {
    setQ15(e.target.value);
  };
  const callStatusvalue = (e) => {
    setCallStatus(e.target.value);
  };
  const agent = sessionStorage.getItem("agent");
  console.log(agent);
  const handleSubmit = (e) => {
    const answer = {
      ans1: q1,
      newName: consumerNewName,
      ans2: q2,
      ans3: q3,
      ans4: q4,
      ans5: q5,
      ans6: q6,
      ans7: q7,
      ans8: [q4aValue1, q4aValue2, q4aValue3, q4aValue4, q4aValue5, q4aValue6],
      ans9: [q4bValue1, q4bValue2],
      ans10: [
        q4cValue1,
        q4cValue2,
        q4cValue3,
        q4cValue4,
        q4cValue5,
        q4cValue6,
        q4cValue7,
      ],
      ans11: q11,
      ans12: q12,
      ans13: q13,
      ans14: q14,
      ans15: q15,
      callStatus: callStatus,
      agentID: agent,
      callDate: new Date().toLocaleDateString(),
      callTime: new Date().toLocaleTimeString(),
    };
    console.log(answer);
    fetch(`http://192.168.10.11:5005/answers/${consumer?._id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    window.location.reload(false);
  };

  return (
    <div>
      <div style={{ display: consumer === null ? "block" : "none" }}>
        <input
          onChange={handleText}
          className="form-control w-50"
          type="text"
          name="serachNumber"
        />
        <br />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
      </div>
      <div
        style={{
          display: consumer === null ? "none" : "block",
        }}
      >
        <h5 style={{ backgroundColor: "lightskyblue" }} className="card p-2">
          Selction 1
        </h5>
        <h6>
          <span className="font-weight-bold"> S2b. </span>আসসালামুআলাইকুম, আমি
          কি <b>{consumer?.r_name}</b> স্যারের সাথে কথা বলছি?
        </h6>
        <p className="text-secondary">
          উত্তরদাতার দ্বারা উল্লিখিত নামটি লিখুন। এস 2 এ (পূর্ববর্তী স্ক্রিন)
          সরবরাহিত তথ্য সহ উত্তরদাতার নাম পরীক্ষা করুন। যদি নামটি মেলে না তবে
          দয়া করে এস 3-তে কোড "ভুল উত্তরদাতা" কোড করুন।
        </p>
        <Form.Group onChange={q1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>একটি নির্বাচন করুন</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <Form.Group onChange={consumerName} as={Row}>
          <Form.Control
            className="w-50 ml-3"
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
      </div>
      <div
        style={{
          display: q1 === "yes" || q1 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          <span className="font-weight-bold"> S4a. </span> বিভিন্ন সিগারেট
          ব্র্যান্ড সম্পর্কে পূর্ণবয়স্ক ধূমপায়ীদের মতামত জানার জন্য আমরা একটি
          ছোট আকারের ফোন জরিপ করছি। আজকের জরিপটি ৪-৫ মিনিটের হবে। আমাদের
          প্রতিষ্ঠানের অভ্যন্তরীণ গবেষণার কাজে আপনার তথ্য, যেমন, নাম, কন্ট্যাক্ট
          নাম্বার, মতামত ইত্যাদি সংরক্ষণ , ব্যবহার এবং শেয়ার করা হবে। দয়া করে
          সময় দিয়ে উত্তর দিলে উপকৃত হব। জরিপটি চালানোর জন্য আমি কি আপনার অনুমতি
          পেতে পারি?
        </h6>
        <Form.Group onChange={q2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>একটি নির্বাচন করুন</option>
            <option value="permitted">অনুমতি দিয়েছেন</option>
            <option value="notPermitted">অনুমতি দেননি</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q2 === "permitted" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          <span className="font-weight-bold">S4b.</span> স্যার, আপনার বয়স কতো,
          সেটি কি জানতে পারি?
        </h6>
        <p className="text-secondary">
          যদি উত্তর আসে ‘১৮ বছরের বেশি’ তবে কথা বলা চালিয়ে যাবেন, নতুবা ধন্যবাদ
          দিয়ে কথা শেষ করে সংযোগ কেটে দিন
        </p>
        <Form.Group onChange={q3value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>একটি নির্বাচন করুন</option>
            <option value="-18">১৮ এর নিচে</option>
            <option value="19-24">১৯-২৪</option>
            <option value="25-34">২৫-৩৪</option>
            <option value="35-44">৩৫-৪৪</option>
            <option value="45-54">৪৫-৫৪</option>
            <option value="55-64">৫৫-৬৪</option>
            <option value="64+">৬৪+</option>
          </Form.Control>
        </Form.Group>
      </div>
      <hr />
      <div
        style={{
          display:
            q3 === "19-24" ||
            q3 === "25-34" ||
            q3 === "35-44" ||
            q3 === "45-54" ||
            q3 === "55-64" ||
            q3 === "64+"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h5
          style={{ backgroundColor: "lightskyblue" }}
          className="card p-2 mb-3"
        >
          Selction 2
        </h5>
        <h6>
          <span className="font-weight-bold"> Q1. </span>এখন আমি কয়েকটি নতুন
          সিগারেট ব্র্যান্ডের নাম পড়ব। নিচের কোন সিগারেট ব্র্যান্ড আপনি জানেন
          এবং ধূমপান করেছেন?
        </h6>
        <Form.Group onChange={q4value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>একটি নির্বাচন করুন</option>
            <option value="luckyStrike">Lucky Strike</option>
            <option value="goldLeafHavana">Gold Leaf Havana</option>
            <option value="navyCentury">Navy Century</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q4 === "luckyStrike" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          <span className="font-weight-bold"> Q2. </span> আপনি যেমন উল্লেখ
          করেছেন যে আপনি জানেন এবং ধূমপান করেছেন, নতুন Flavor এর সিগারেট লাকি
          স্ট্রাইক, আপনি আগে কোন ব্রান্ডের সিগারেট ধূমপান করতেন, এবং আপনি আগে
          কোন Flavor এর সিগারেট ধূমপান করতেন?
        </h6>
        <Form.Group onChange={q5value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>একটি নির্বাচন করুন</option>
            <option value="JPGL / Gold Leaf">JPGL / Gold Leaf</option>
            <option value="Star">Star</option>
            <option value="Navy">Navy</option>
            <option value="B&H / Marlboro">B&H / Marlboro</option>
            <option value="Derby/ Sheikh/ Hollywood/ Pilot/ Marise">
              Derby/ Sheikh/ Hollywood/ Pilot/ Marise
            </option>
            <option value="Did not mention any of the above">
              Did not mention any of the above
            </option>
          </Form.Control>
        </Form.Group>
      </div>
      <div style={{ display: q5 === null ? "none" : "block" }} className="mt-2">
        <h6>
          <span className="font-weight-bold"> Q3. </span>আপনি যেমন বলেছিলেন যে
          আপনি সম্প্রতি লাকি স্ট্রাইক ধূমপান করেছেন, আপনি কি মনে করেন যে আপনি
          এটি আবার ধূমপান করবেন?
        </h6>
        <Form.Group onChange={q6value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>একটি নির্বাচন করুন</option>
            <option value="Will definitely consider">
              অবশ্যই বিবেচনা করবো
            </option>
            <option value="Might consider">সম্ভবত বিবেচনা করবো</option>
            <option value="Might not consider">সম্ভবত বিবেচনা করবো না</option>
            <option value="Won’t consider at all">
              একেবারেই বিবেচনা করবো না
            </option>
          </Form.Control>
        </Form.Group>
      </div>
      <div style={{ display: q6 === null ? "none" : "block" }} className="mt-2">
        <h6>
          <span className="font-weight-bold"> Q4. </span>আপনি যেমন বলেছিলেন আপনি
          লাকি স্ট্রাইক ধূমপান করেছেন, আপনি কি এটি পছন্দ করেছেন?
        </h6>
        <Form.Group onChange={q7value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>একটি নির্বাচন করুন</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q7 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          <span className="font-weight-bold"> Q4a. </span>আপনি যেমন বলেছিলেন যে
          আপনি লাকি স্ট্রাইক পছন্দ করেছেন, আপনি ব্র্যান্ডটি পছন্দ করেন তার
          কারণগুলি কী কী?
        </h6>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onClick={(event) =>
                  event.target.checked
                    ? setQ4aValue1("Less draw effort/easy to draw")
                    : setQ4aValue1("")
                }
                name="checkedA"
              />
            }
            label="সহজে টানা যায়"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={(event) =>
                  event.target.checked
                    ? setQ4aValue2("No irritation in throat")
                    : setQ4aValue2("")
                }
                name="checkedB"
              />
            }
            label="টানার সময় গলায় লাগেনা / গলা জ্বলেনা"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={(event) =>
                  event.target.checked
                    ? setQ4aValue3("Liked the Flavor without the capsule")
                    : setQ4aValue3("")
                }
                name="checkedC"
              />
            }
            label="ক্যাপসুল ছাড়া স্বাদ পছন্দ"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={(event) =>
                  event.target.checked
                    ? setQ4aValue4("Liked the Flavor with the capsule")
                    : setQ4aValue4("")
                }
                name="checkedD"
              />
            }
            label="ক্যাপসুলের সাথে স্বাদ পছন্দ হয়েছে"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={(event) =>
                  event.target.checked
                    ? setQ4aValue5("Liked the design")
                    : setQ4aValue5("")
                }
                name="checkedE"
              />
            }
            label="ডিজাইনটি পছন্দ হয়েছে"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={(event) =>
                  event.target.checked
                    ? setQ4aValue6("Other")
                    : setQ4aValue6("")
                }
                name="checkedF"
              />
            }
            label="অন্যান্য"
          />
        </FormGroup>
      </div>
      <div>
        <div
          style={{
            display:
              q4aValue1 === "Less draw effort/easy to draw" ||
              q4aValue2 === "No irritation in throat" ||
              q4aValue3 === "Liked the Flavor without the capsule" ||
              q4aValue4 === "Liked the Flavor with the capsule" ||
              q4aValue5 === "Liked the design" ||
              q4aValue6 === "Other"
                ? "block"
                : "none",
          }}
          className="mt-2"
        >
          <h6>
            <span className="font-weight-bold">Q4b. </span> আপনি কোন Flavor বেশি
            পছন্দ করেন?
          </h6>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onClick={(event) =>
                    event.target.checked
                      ? setQ4bValue1("Supersonic/Blue Berry")
                      : setQ4bValue1("")
                  }
                  name="checkedA"
                />
              }
              label="সুপারসনিক/ ব্লু বেরি"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onClick={(event) =>
                    event.target.checked
                      ? setQ4bValue2("Cool Crunch/Lemon")
                      : setQ4bValue2("")
                  }
                  name="checkedB"
                />
              }
              label="কুল ক্রাঞ্চ/ লেবু"
            />
          </FormGroup>
        </div>
      </div>
      <div
        style={{
          display: q7 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          <span className="font-weight-bold"> Q4c. </span> আপনি যেমন বলেছিলেন যে
          আপনি লাকি স্ট্রাইককে অপছন্দ করেছেন, আপনি ব্র্যান্ডকে অপছন্দ করেন তার
          কারণগুলি কী?
        </h6>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onClick={(event) =>
                  event.target.checked
                    ? setQ4cValue1("Can’t draw easily")
                    : setQ4cValue1("")
                }
                name="checkedA"
              />
            }
            label="সহজে টানা যায় না"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={(event) =>
                  event.target.checked
                    ? setQ4cValue2("Irritation in throat")
                    : setQ4cValue2("")
                }
                name="checkedB"
              />
            }
            label="টানার সময় গলায় লাগে / গলা জ্বলে"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={(event) =>
                  event.target.checked
                    ? setQ4cValue3("Cigarette burns fast")
                    : setQ4cValue3("")
                }
                name="checkedC"
              />
            }
            label="সিগারেট দ্রুত জ্বলে শেষ হয়ে যায়"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={(event) =>
                  event.target.checked
                    ? setQ4cValue4("Didn’t like the taste without capsule")
                    : setQ4cValue4("")
                }
                name="checkedD"
              />
            }
            label="ক্যাপসুল ছাড়া স্বাদ পছন্দ হয়নি"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={(event) =>
                  event.target.checked
                    ? setQ4cValue5("Didn’t like the taste with capsule")
                    : setQ4cValue5("")
                }
                name="checkedE"
              />
            }
            label="ক্যাপসুল দিয়ে স্বাদ পছন্দ হয়নি"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={(event) =>
                  event.target.checked
                    ? setQ4cValue6("Didn’t like the design")
                    : setQ4cValue6("")
                }
                name="checkedF"
              />
            }
            label="ডিজাইন ভালো লাগেনি"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={(event) =>
                  event.target.checked
                    ? setQ4cValue7("Other")
                    : setQ4cValue7("")
                }
                name="checkedG"
              />
            }
            label="অন্যান্য"
          />
        </FormGroup>
      </div>
      <div
        style={{
          display:
            q4bValue1 === "Supersonic/Blue Berry" ||
            q4bValue2 === "Cool Crunch/Lemon" ||
            q4cValue1 === "Can’t draw easily" ||
            q4cValue2 === "Irritation in throat" ||
            q4cValue3 === "Cigarette burns fast" ||
            q4cValue4 === "Didn’t like the taste without capsule" ||
            q4cValue5 === "Didn’t like the taste with capsule" ||
            q4cValue6 === "Didn’t like the design" ||
            q4cValue7 === "Other"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          <span className="font-weight-bold"> Q5. </span>আপনি সম্প্রতি যে নতুন
          Flavor ব্র্যান্ডটি ধূমপান করেছেন তা আপনি কোন মূল্যে কিনেছেন? দয়া করে
          stick দাম উল্লেখ করুন।
        </h6>
        <Form.Group onChange={q11value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>একটি নির্বাচন করুন</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q11 === null ? "none" : "block" }}
        className="mt-2"
      >
        <h6>
          <span className="font-weight-bold"> Q6. </span> যদি কোন নতুন সিগারেট
          প্রতি স্টিক 10 টাকায় চালু হয়, তাহলে আপনি কি সেই দামে নতুন সিগারেট
          ব্র্যান্ড ধূমপান করার কথা বিবেচনা করবেন?
        </h6>
        <Form.Group onChange={q12value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>একটি নির্বাচন করুন</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q12 === null ? "none" : "block" }}
        className="mt-2"
      >
        <h6>
          <span className="font-weight-bold"> Q7. </span>আপনি যেমন বলেছিলেন যে
          আপনি Flavor সিগারেট ধূমপান করেন, স্যার দৈনিক কত শলাকা Flavor সিগারেট
          ধূমপান করছেন ?
        </h6>
        <Form.Group onChange={q13value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>একটি নির্বাচন করুন</option>
            <option value="Less than 20 sticks">20 টিরও কম stick</option>
            <option value="Between 20 to 40 sticks">
              20 থেকে 40 sticks মধ্যে
            </option>
            <option value="More than 40+ sticks">40 এর বেশি sticks</option>
            <option value="Stock not selling much">
              স্টক বেশি বিক্রি হয় না
            </option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q13 === null ? "none" : "block" }}
        className="mt-2"
      >
        <h6>
          <span className="font-weight-bold"> Q8. </span>এখন আমি এখন আপনাকে কিছু
          ম্যাসেজ/বার্তা পড়ে শুনাচ্ছি , আপনি কি মনে করেন যে আপনি এইগুলো আগে
          শুনেছেন?
        </h6>
        <Form.Group onChange={q14value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>একটি নির্বাচন করুন</option>
            <option value="Popular in 80 Country">80 টি দেশে জনপ্রিয়</option>
            <option value="Flavour Full Taste">Full Flavour স্বাদ</option>
            <option value="Attractive Capsule Proposition">
              আকর্ষণীয় ক্যাপসুল প্রস্তাব
            </option>
            <option value="10 taka brand">10 টাকা ব্র্যান্ড</option>
            <option value="Cannot recall any">কিছুই মনে করতে পারছি না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q14 === null ? "none" : "block" }}
        className="mt-2"
      >
        <h6>
          <span className="font-weight-bold"> Q9. </span>এখন আমি কয়েকটি নতুন
          মার্চেন্ডাইজিং আইটেমের একটি তালিকা পড়ব, আপনি কি দয়া করে আমাকে বলতে
          পারেন যে আপনি সিগারেটের দোকানে সম্প্ৰতি কোনটি লক্ষ্য করেন?
        </h6>
        <Form.Group onChange={q15value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>একটি নির্বাচন করুন</option>
            <option value="Pack Display">প্যাক ডিসপ্লে</option>
            <option value="Lighter hanger">লাইটার হ্যাঙ্গার</option>
            <option value="Photo Frame">ছবির ফ্রেম</option>
            <option value="Price sticker & Trade letter">
              Price স্টিকার এবং Trade Letter
            </option>
            <option value="Cannot recall any">কিছুই মনে করতে পারছি না</option>
          </Form.Control>
        </Form.Group>
      </div>
      {/* Final Question */}
      <div
        style={{
          display:
            q2 === "notPermitted" ||
            q3 === "-18" ||
            q4 === "goldLeafHavana" ||
            q4 === "navyCentury" ||
            q15 === "Pack Display" ||
            q15 === "Lighter hanger" ||
            q15 === "Photo Frame" ||
            q15 === "Price sticker & Trade letter" ||
            q15 === "Cannot recall any"
              ? "block"
              : "none",
        }}
        className="mt-3"
      >
        <h5>ধন্যবাদ স্যার, আপনার মূল্যবান সময় দেয়ার</h5>
        <label>
          <span className="font-weight-bold">S3. </span> কল স্ট্যাটাস{" "}
        </label>
        <Form.Group onChange={callStatusvalue} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option value="">একটা নির্বাচন করুন</option>
            <option value="Successful Call">
              সাকসেসফুল কল (উত্তরদাতার সাথে কথা হয়েছে)
            </option>
            <option value="To set appointment">টাইম সেট করা হয়েছিল</option>
            <option value="Did not receive number (1st Attempt)">
              ফোন রিসিভ করে নাই এমন নাম্বার (১ম চেস্টায়)
            </option>
            <option value="Did not receive number (2nd Attempt)">
              ফোন রিসিভ করে নাই এমন নাম্বার (২য় চেস্টায়)
            </option>
            <option value="Did not receive number (3rd Attempt)">
              ফোন রিসিভ করে নাই এমন নাম্বার (৩য় চেস্টায়)
            </option>
            <option value="Temporarily Busy (1st Attempt)">
              নাম্বার টি সাময়িক ব্যাস্ত (১ম চেস্টায়)
            </option>
            <option value="Temporarily Busy (2nd Attempt)">
              নাম্বার টি সাময়িক ব্যাস্ত (২য় চেস্টায়)
            </option>
            <option value="Temporarily Busy (3rd Attempt)">
              নাম্বার টি সাময়িক ব্যাস্ত (৩য় চেস্টায়)
            </option>
            <option value="Family members received the call (1st Attempt)">
              উত্তরদাতার পরিবারের কেউ ফোন ধরেছে (১ম চেস্টায়)
            </option>
            <option value="Family members received the call (2nd Attempt)">
              উত্তরদাতার পরিবারের কেউ ফোন ধরেছে (২য় চেস্টায়)
            </option>
            <option value="Temporarily Closed number">
              নাম্বার টি সাময়িক বন্ধ ( এই মুহূর্তে এই নাম্বার টি বন্ধ রয়েছে)
            </option>
            <option value="Rejected by Respondent">
              সাক্ষাতকার দিতে অনীহা প্রকাশ করেছে এমন নাম্বার
            </option>
            <option value="Wrong Number or Permanently Closed Number">
              ভুল নাম্বার বা স্থায়ী বন্ধ নাম্বার ( এই নাম্বার টি আর ব্যবহারিত হয়
              না)
            </option>
            <option value="Wrong Respondent">ভুল উত্তরদাতা</option>
          </Form.Control>
        </Form.Group>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyBody;
