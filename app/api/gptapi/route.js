import { BardAI } from "bardie";
export const dynamic = "force-dynamic";
async function fetchBardQuestion(question) {
  const bard = new BardAI();
  try {
    const response = await bard.question({ ask: question });
    return response.content.replace(/\*/g, "");
  } catch (error) {
    console.error("Error in fetchBardQuestion:", error);
    throw new Error("BardAI question processing failed");
  }
}

export async function GET(req, res) {
  try {
    const { username } = Object.fromEntries(req.nextUrl.searchParams);
    const { gender, date, calendartype, time } = JSON.parse(username);

    const firstQuestion = `${calendartype} ${date} ${time} 출생 ${gender}의 만세력을 바탕으로 운세를 알려줘.`;
    const firstResponse = await fetchBardQuestion(firstQuestion);

    const secondQuestion = `${calendartype} ${date} ${time} 출생 ${gender}인   나의 오행기운을 오행기운: 금(金):n개 목(木):n개  수(水):n개  화(火):n개  토(土):n개 이런식으로 아무 대답도 설명도 하지말고 갯수만 적어줘. 0개인 경우도 적어줘.형식에 변화는 주지말고 저 오행단어는 그대로 써줘 `; // 이전과 동일
    const secondResponse = await fetchBardQuestion(secondQuestion);

    const thirdQuestion = `오행기운:\n금(金): ${match[1]}개\n목(木): ${match[2]}개\n수(水): ${match[3]}개\n화(火): ${match[4]}개\n토(土): ${match[5]}개`; // 이전과 동일
    const thirdResponse = await fetchBardQuestion(thirdQuestion);

    let formattedResponse2 = formatFiveElements(secondResponse);
    let formattedResponse3 = formatFiveElements(thirdResponse);

    return Response.json({
      response1: firstResponse,
      response2: formattedResponse2,
      response3: formattedResponse3,
    });
  } catch (error) {
    return Response.json({ error: error.message });
  }

  function formatFiveElements(response) {
    const fiveElementsPattern =
      /오행기운:\s*금\(金\):\s*(\d+)개\s*목\(木\):\s*(\d+)개\s*수\(水\):\s*(\d+)개\s*화\(火\):\s*(\d+)개\s*토\(土\):\s*(\d+)개/;
    const match = response.match(fiveElementsPattern);
    if (match) {
      return `오행기운:\n금(金): ${match[1]}개\n목(木): ${match[2]}개\n수(水): ${match[3]}개\n화(火): ${match[4]}개\n토(土): ${match[5]}개`;
    }
    return "No match found";
  }
}
