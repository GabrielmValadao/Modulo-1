const captureErroYup = (error) => {
  error.inner.reduce((acc, currentValue) => {
    const data = { ...acc };
    data[currentValue.patch] = currentValue.message;

    return data;
  }, {});
};
