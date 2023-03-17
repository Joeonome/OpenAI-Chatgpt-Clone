export const ARRAY_ITEMS = [{
    name: 'Q&A',
    id: "q&a",
    description: 'Answer question based on existing knowledge',
    option: {
    model: "text-davinci-003",
    temperature: 1,
    max_tokens: 2500,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: [" Human:"," AI:"],
}
},
{
    name: 'Grammar Correction',
    id: "grammarCorrection",
    description: 'Corrects sentences into standard English',
    option: {
        model: "text-davinci-003",
        temperature: 1,
        max_tokens: 2500,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:"," AI:"],
}
},
{
    name: 'English to other languages',
    id: "englishToOthers",
    description: 'Translates English text into French, Spanish and Japanese',
    option: {
        model: "text-davinci-003",
        temperature: 0.3,
        max_tokens: 2500,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: [" Human:"," AI:"],
}
},
{
    name: 'SQL Translate',
    id: "translateSQL",
    description: 'Translate natural language to SQL queries',
    option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["#", ";"],
}
}, 
{
    name: 'Classification',
    id: "class",
    description: 'Classify items into categories via example',
    option: {
        model: "text-davinci-003",
        temperature: 1,
        max_tokens: 2500,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:"," AI:"],
}
},
{
    name: 'Python to natural language',
    id: "python2Natural",
    description: 'Explain a piece of Python code in human understandable language',
    option: {
        model: "text-davinci-003",
        temperature: 1,
        max_tokens: 2500,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:"," AI:"],
}
},
{
    name: 'Movie to emoji',
    id: "movie2Emoji",
    description: 'Convert movie titles into emoji',
    option: {
        model: "text-davinci-003",
        temperature: 1,
        max_tokens: 2500,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:"," AI:"],
}
},
{
    name: 'Keywords',
    id: "keywords",
    description: 'Extract keywords from a block of text. At a lower temperature it picks keywords from the text. At a higher temperature it will generate related keywords which can be helpful for creating search indexes',
    option: {
        model: "text-davinci-003",
        temperature: 1,
        max_tokens: 2500,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:"," AI:"],
}
},
{
    name: 'Javascript to python',
    id: "javascript2Python",
    description: 'Convert simple JavaScript expressions into Python',
    option: {
        model: "text-davinci-003",
        temperature: 1,
        max_tokens: 2500,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:"," AI:"],
}
},
{
    name: 'Chat',
    id: "chat",
    description: 'Open ended conversation with an AI assistant',
    option: {
        model: "text-davinci-003",
        temperature: 1,
        max_tokens: 2500,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:"," AI:"],
}
}
]

