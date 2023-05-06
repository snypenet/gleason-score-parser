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

                    Can you find the last gleason score in the "text"? 
                    Display the result by primary, secondary, score, and severity
                    Do not display it in table format
            `}
        ]
    });

    return result.data;
};

module.exports = {
    determineGleasonScores
}