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
                    Parse the gleason scores into Primay, Secondary, Score
                    Calculate the Score based on Score=Primary+Secondary if the Score is Unknown
                    Determine the Severity based on the Score less than 6 = Very Low, Score of 6 = Low, Score of 7 = Intermediate, Score of 8 = High, Score greater than or equal to 9 is Very High
                    Determine the regex needed to parse each Gleason score
                    Explain your answer
            `}
        ]
    });

    return result.data;
};

module.exports = {
    determineGleasonScores
}