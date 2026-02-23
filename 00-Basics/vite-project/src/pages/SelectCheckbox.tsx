import { useState } from "react";

const SelectCheckbox = () => {
  const [form, setForm] = useState({
    fruit: "apple",
    isSubscribed: false,
    channel: "email,",
    submitted: false,
  });

  const handleFruitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm((prev) => ({
      ...prev,
      fruit: e.target.value,
    }));
  };

  const handleSubscribedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      isSubscribed: e.target.checked,
    }));
  };

  const handleChannelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      channel: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm((prev) => ({
      ...prev,
      submitted: true,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <select value={form.fruit} onChange={handleFruitChange}>
          <option value="apple">apple</option>
          <option value="banana">banana</option>
          <option value="cherry">cherry</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={handleSubscribedChange}
            checked={form.isSubscribed}
          />
          뉴스레터 구독하기
        </label>
      </div>
      <fieldset style={{ border: "1px solid #ddd", padding: "8px" }}>
        <legend>알림채널</legend>
        <label>
          <input
            type="radio"
            name="channel"
            value="email"
            checked={form.channel === "email"}
            onChange={handleChannelChange}
          />
          email
        </label>
        <label>
          <input
            type="radio"
            name="channel"
            value="sms"
            checked={form.channel === "sms"}
            onChange={handleChannelChange}
          />
          sms
        </label>
        <label>
          <input
            type="radio"
            name="channel"
            value="push"
            checked={form.channel === "push"}
            onChange={handleChannelChange}
          />
          push
        </label>
      </fieldset>
      <button type="submit">제출하기</button>
      <hr />
      <hr />
      <hr />
      <hr />
      <p>
        선택된 과일: <b>{form.fruit}</b>
      </p>
      <p>
        구독여부: <b>{form.isSubscribed ? "구독중" : "미구독"}</b>
      </p>
      <p>
        알림채널: <b>{form.channel}</b>
      </p>
      {form.submitted && (
        <>
          <div
            style={{
              height: 1,
              background: "#000",
              margin: "12px 0",
            }}
          >
            <p>
              <b>제출 결과 : </b>
              과일 {form.fruit} / 구독{form.isSubscribed ? "O" : "X"} / 채널
              {form.channel}
            </p>
          </div>
        </>
      )}
    </form>
  );
};

export default SelectCheckbox;
