const openai = require("../config/openAI");
const { gleasonFormats } = require("../constants/formats");

const determineGleasonScores = async (request) => {
    const result = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user', 
                content: `
                    gleason score formats:
                    ${gleasonFormats.join('\n')}
                    -----------------------------

                    text:
                    ${request.text}
                    -----------------------------

                    Can you count the number of gleason scores in the "text"?
                    Parse the gleason scores into Primay, Secondary, Score, and Severity
                    Calculate the Score based on Score=Primary+Secondary if the Score is Unknown
                    Provide regex to parse each gleason score
                    Explain your answer
            `}
        ]
    });

    return result.data;
};

module.exports = {
    determineGleasonScores
}