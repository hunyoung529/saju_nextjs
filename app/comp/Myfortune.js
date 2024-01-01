"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../pages/myfortune/myfortune.module.scss";

const Myfortune = function () {
  const [userId, setUserId] = useState([]);
  const [answer, setAnswer] = useState();
  const [fortuneData, setFortuneData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/member");
      setUserId(response.data);
    }

    fetchData();
  }, []);
  const sessionId =
    typeof window !== "undefined" ? window.sessionStorage.getItem("id") : null;

  const loginUser = userId.find((member) => member.id === sessionId);

  useEffect(() => {
    if (!loginUser) return;

    axios(`/api/gptapi?username=${JSON.stringify(loginUser)}`).then((res) => {
      setAnswer(res.data);
      console.log(res);
    });
    async function fetchFortune() {
      try {
        const res = await axios.get(
          `/api/fortune?id=${loginUser.id}&type=fortuneCheck`
        );
        setFortuneData(res.data[0]);
      } catch (error) {
        console.error("Error fetching fortune:", error);
      }
    }
  }, [loginUser]);

  useEffect(() => {
    if (answer) {
      async function updateFortune() {
        if (!loginUser || !loginUser.id) return;
        try {
          const response = await axios.put("/api/fortune", {
            id: loginUser.id,
            fortune: answer.response1,
            myelement: answer.response2,
            yourelement: answer.response3,
          });
          console.log("Fortune updated:", response.data);
        } catch (error) {
          console.error("Error updating fortune:", error);
        }
      }
      updateFortune();
    }
  }, [answer]);
  console.log(fortuneData?.fortune);
  console.log(answer);

  return (
    <div className={styles.myfortuneWrap}>
      <img src="../../imges/main_angel_cut.png" />
      <div className={styles.title}>당신의 운세</div>
      {fortuneData && fortuneData?.fortune !== null ? (
        <div style={{ whiteSpace: "pre-line" }}>
          <div className={styles.fortune}>{fortuneData.fortune}</div>
          <div className={styles.row}>
            <div>
              <p className={styles.eleTitle}>&lt; 나의 5행 &gt;</p>
              <p className={styles.ele}>{fortuneData?.myelement}</p>
            </div>
            <div>
              <p className={styles.eleTitle}>&lt; 상대의 5행 &gt;</p>
              <p className={styles.ele}>{fortuneData?.yourelement}</p>
            </div>
          </div>
        </div>
      ) : (
        answer && (
          <div style={{ whiteSpace: "pre-line" }}>
            <div className={styles.fortune}>
              <p>{answer.response1}</p>
            </div>
            <div className={styles.row}>
              <p className={styles.ele}>{answer.response2}</p>
              <p className={styles.ele}>{answer.response3}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Myfortune;
