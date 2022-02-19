interface ExternalVocabulary {
  random: () => Promise<object>;
  valid: (word: string) => Promise<object>;
}

export default ExternalVocabulary;