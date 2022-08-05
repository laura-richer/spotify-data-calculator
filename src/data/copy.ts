export const calculatorCopy = () => {
  const calculatorCopy: CalculatorCopyObject = {
    CalculateTime: {
      title: 'How much time you would like to listen for? I will tell you how much mobile data you need.',
      resultTitle: 'Heres how long you can listen for',
    },
    CalculateData: {
      title: 'How much data you have left? I will tell you how long you can listen for.',
      resultTitle: 'Heres how much data you need',
    }
  };

  return calculatorCopy
}

interface CalculatorTypeObject {
  title: string;
  resultTitle: string,
}

export interface CalculatorCopyObject {
  CalculateTime: CalculatorTypeObject;
  CalculateData: CalculatorTypeObject;
}
