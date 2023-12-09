//填寫問卷階段
//依照不同診斷而產生進階結果
function checkDiagnosis() {
  const diagnosis = document.getElementById("diagnosis").value;
  const diseaseTypeDiv = document.getElementById("diseaseTypeDiv");

  if (diagnosis === "癌症") {
    const label_1 = document.createElement("label");
    label_1.innerText = "癌症部位：";

    const select_1 = document.createElement("select");
    select_1.id = "cancerType";
    select_1.className = "form-select";
    select_1.innerHTML = `
          <option value="">請選擇癌症部位</option>
          <option value="中樞神經或腦癌">中樞神經或腦癌</option>
          <option value="頭頸癌">頭頸癌</option>
          <option value="肺癌">肺癌</option>
          <option value="乳癌">乳癌</option>
          <option value="肝癌">肝癌</option>
          <option value="胃癌">胃癌</option>
          <option value="胰臟癌">胰臟癌</option>
          <option value="腎臟癌">腎臟癌</option>
          <option value="攝護腺癌">攝護腺癌</option>
          <option value="膀胱癌">膀胱癌</option>
          <option value="子宮體與子宮頸癌">子宮體與子宮頸癌</option>
          <option value="卵巢癌">卵巢癌</option>
          <option value="大腸直腸癌">大腸直腸癌</option>
          <option value="淋巴瘤">淋巴瘤</option>
          <option value="血液疾病">血液疾病</option>
          <option value="皮膚癌">皮膚癌</option>
          <option value="甲狀腺癌">甲狀腺癌</option>
          <option value="Sarcoma">Sarcoma</option>
          <option value="其它">其它</option>
          <!-- ...other types... -->
          `;

    const label_2 = document.createElement("label");
    label_2.innerText = "轉移：";

    const select_2 = document.createElement("select");
    select_2.id = "metastasis";
    select_2.className = "form-select";
    select_2.innerHTML = `
                <option value="">是否有轉移</option>
                <option value="有轉移">是</option>
                <option value="無轉移">否</option>
                <!-- ...other types... -->
                `;

    diseaseTypeDiv.innerHTML = ""; // Clear the div
    diseaseTypeDiv.appendChild(label_1);
    diseaseTypeDiv.appendChild(select_1);
    diseaseTypeDiv.appendChild(label_2);
    diseaseTypeDiv.appendChild(select_2);
  } else if (diagnosis === "神經疾病") {
    const label = document.createElement("label");
    label.innerText = "神經疾病的種類：";

    const select = document.createElement("select");
    select.id = "neurologicalType";
    select.innerHTML = `
        <option value="">選擇一個神經診斷</option>
        <option value="失智症">失智症</option>
        <option value="腦中風">腦中風</option>
        <option value="腦傷">腦傷</option>
        <option value="多發性硬化症">多發性硬化症</option>
        <option value="巴金森氏症">巴金森氏症</option>
        <option value="其他">其他</option>
        `;

    diseaseTypeDiv.innerHTML = ""; // Clear the div
    diseaseTypeDiv.appendChild(label);
    diseaseTypeDiv.appendChild(select);
  } else if (diagnosis === "腎臟疾病(腎衰竭)") {
    const label = document.createElement("label");
    label.innerText = "腎衰竭的原因：";

    const select = document.createElement("select");
    select.id = "renalFaliureType";
    select.innerHTML = `
        <option value="">選擇急性或慢性</option>
        <option value="慢性腎病(ESRD)">慢性腎病(ESRD)</option>
        <option value="急性腎衰竭">急性腎衰竭</option>
        `;

    diseaseTypeDiv.innerHTML = ""; // Clear the div
    diseaseTypeDiv.appendChild(label);
    diseaseTypeDiv.appendChild(select);
  } else {
    diseaseTypeDiv.innerHTML = ""; // Clear the div if the diagnosis is not cancer
  }
}

// Survival slider 滑桿數字顯示
document.addEventListener("DOMContentLoaded", function () {
  const sliderDay7 = document.getElementById("7daySurvival");
  const sliderValueDay7 = document.getElementById("7daySliderValue");
  // 初始化顯示值
  sliderValueDay7.textContent = sliderDay7.value;
  // 當滑桿值改變時，更新顯示值
  sliderDay7.addEventListener("input", function () {
    sliderValueDay7.textContent = sliderDay7.value;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sliderDay14 = document.getElementById("14daySurvival");
  const sliderValueDay14 = document.getElementById("14daySliderValue");
  // 初始化顯示值
  sliderValueDay14.textContent = sliderDay14.value;
  // 當滑桿值改變時，更新顯示值
  sliderDay14.addEventListener("input", function () {
    sliderValueDay14.textContent = sliderDay14.value;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sliderDay30 = document.getElementById("30daySurvival");
  const sliderValueDay30 = document.getElementById("30daySliderValue");
  // 初始化顯示值
  sliderValueDay30.textContent = sliderDay30.value;
  // 當滑桿值改變時，更新顯示值
  sliderDay30.addEventListener("input", function () {
    sliderValueDay30.textContent = sliderDay30.value;
  });
});

//按下送出階段，產生文字
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitButton");
  const resultDiv = document.getElementById("resultDiv");

  submitButton.addEventListener("click", function () {
    // 收集診斷資料
    const diagnosis = document.getElementById("diagnosis").value;
    // 收集次診斷資料
    let diagnosis_detail = "";
    ///癌症次診斷
    try {
      const cancerType = document.getElementById("cancerType").value;
      // Do something with value
      diagnosis_detail = "(" + cancerType + ")";
    } catch (error) {
      console.warn("cancerType Element or value not found, skipping...");
    }
    ///神經學次診斷
    try {
      const neurologicalType =
        document.getElementById("neurologicalType").value;
      // Do something with value
      diagnosis_detail = "(" + neurologicalType + ")";
    } catch (error) {
      console.warn("neurologicalType Element or value not found, skipping...");
    }
    ///腎衰竭次診斷
    try {
      const renalFailureType =
        document.getElementById("renalFailureType").value;
      // Do something with value
      diagnosis_detail = "(" + renalFailureType + ")";
    } catch (error) {
      console.warn("renalFailureType Element or value not found, skipping...");
    }

    //社經狀況評估
    const sex = document.querySelector(
      'input[name="sex"]:checked'
    ).value;
    const socialWorker = document.querySelector(
      'input[name="socialWorker"]:checked'
    ).value;
    //收集功能評估
    ///ambulation
    const ambulation = document.getElementById("ambulation").value;
    ///activity
    const activity = document.getElementById("activity").value;
    ///appetite
    const appetite = document.getElementById("appetite").value;
    ///selfCare
    const selfCare = document.getElementById("selfCare").value;

    ///consciousness
    const consciousness = document.getElementById("consciousness").value;

    ///edema
    const edema = document.querySelector('input[name="edema"]:checked').value;
    ///delirium
    const delirium = document.querySelector(
      'input[name="delirium"]:checked'
    ).value;
    ///dyspnea
    const dyspnea = document.getElementById("dyspnea").value;
    ///anorexia
    const anorexia = document.querySelector(
      'input[name="anorexia"]:checked'
    ).value;
    ///AKPS
    const AKPS = document.getElementById("AKPS").value;

    ///pain
    const pain = document.getElementById("pain").value;
    ///jaundice
    const jaundice = document.querySelector(
      'input[name="jaundice"]:checked'
    ).value;

    ///purpura
    const purpura = document.getElementById("purpura").value;

    ///urination
    const urination = document.getElementById("urination").value;

    ///carePhase
    const carePhase = document.getElementById("carePhase").value;


    ///roughPrognosis
    const roughPrognosis = document.querySelector(
      'input[name="roughPrognosis"]:checked'
    ).value;

    ///predictedPrognosis
    const predictedPrognosis =
      document.getElementById("predictedPrognosis").value;

    ///7daySurvival
    const survivalDay7 = document.getElementById("7daySurvival").value;

    ///14daySurvival
    const survivalDay14 = document.getElementById("14daySurvival").value;

    ///30daySurvival
    const survivalDay30 = document.getElementById("30daySurvival").value;

    // 計算PPS
    let PPS = "";
    if (ambulation == "可以完全正常移動與活動") {
      if (activity == "完全正常活動與工作/沒有疾病的明顯現象") {
        PPS = "100 %";
      } else {
        //若無法完全正常工作活動就是80-90分
        if ((appetite == "正常")||(appetite == "TPN")) {  //TPN也屬正常食慾
          PPS = "90 %";
        } else {
          PPS = "80 %"; //若食量減少就屬於80分
        }
      }
    } else if (ambulation == "活動量減少") {
      if (selfCare == "可完全自理") {
        if (consciousness == "完全清醒") {
          PPS = "70 %";
        } else {
          PPS = "60 %"; //若意識有較不清醒就屬60分
        }
      } else {
        PPS = "60 %"; //若無法完全自理就屬於60分
      }
    } else if (ambulation == "主要坐或躺") {
      if (selfCare == "需要不少協助") {
        if (consciousness == "昏迷") {
          PPS = "40 %"; //若病人被評為昏迷，應屬40分
        } else {
          PPS = "50 %";
        }
      }
    } else if (ambulation == "大多臥床") {
      if(selfCare == "完全無法自理") {
        PPS = "30 %"; //若平完全依賴他人，則應該也算是bed-ridden應該要30%
      }  else {
        //selfCare應為主要依賴他人協助
        PPS = "40 %";
      }
    } else if (ambulation == "完全臥床") {
      if (appetite == "無進食，僅有口腔護理") {
        PPS = "10 %";
      } else if (appetite == "極少量 僅進食少量泥狀或液體，不符一般營養需求") {
        PPS = "20 %";
      } else {
        PPS = "30 %";
      }
    }


    // 計算PaP
    

    // 組合結果
    let resultText = `
    ${sex}<br>
    Terminal Diagnosis: ${diagnosis} ${diagnosis_detail}<br>
    Ambulation: ${ambulation}<br>
    Activity: ${activity}<br>
    Appetite: ${appetite}<br>
    Self-care: ${selfCare}<br>
    Consciousness: ${consciousness}<br>
    Edema:${edema}<br>
    Delirium:${delirium}<br>
    Dyspnea:${dyspnea}<br>
    Anorexia:${anorexia}<br>
    AKPS: ${AKPS}<br>
    Pain: ${pain}<br>
    Jaundice: ${jaundice}<br>
    Purpura: ${jaundice}<br>
    Urination: ${urination}<br>
    Care Phase: ${carePhase}<br>
    ------------------------<br>
    Prognosis (rough): ${roughPrognosis}<br>
    Predicted prognosis: ${predictedPrognosis}<br>
    Predicted 7-day death: ${survivalDay7} %<br>
    Predicted 14-day death: ${survivalDay14} %<br>
    Predicted 30-day death: ${survivalDay30} %<br>
    <!-- 其他問題的結果... -->
    <p>Palliative performance scale (PPS): ${PPS}<br>
    ------------------------------------<br>
    Social-economic (SW need): ${socialWorker}
    `;

    // 顯示結果
    resultDiv.innerHTML = resultText;
  });
});

async function copyTextUsingClipboard() {
  try {
    // 獲取 input 元素內容
    var textToCopy = document.getElementById("resultDiv").innerText;

    // 使用 Clipboard API 進行複製
    await navigator.clipboard.writeText(textToCopy);

    // Optional：給予用戶反饋
    // alert("已複製的內容: " + textToCopy);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
function sendMail() {
  var emailContent = document.getElementById('resultDiv').innerText; // 從您的元素中獲取內容
  var subject = "Palliative Evaluation Record";
  var mailtoLink = 'mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(emailContent);
  window.location.href = mailtoLink; // 開啟預設郵件客戶端
}
