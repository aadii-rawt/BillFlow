const useFormatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN').format(amount);
};

export default useFormatCurrency