function mapConversion(data) {
  let newOrders = [];

  data?.forEach((order) => {
    const orderAvailable = newOrders.findIndex(no => no.name === order.conversion_item);
    if (orderAvailable !== -1) {
      newOrders[orderAvailable] = {
        name: newOrders[orderAvailable].name,
        y: newOrders[orderAvailable].y + +order.conversion_revenue
      };
    } else {
      newOrders = [
        ...newOrders,
        {
          name: order.conversion_item,
          y: +order.conversion_revenue
        }
      ];
    }
  });

  return newOrders;
}

export default mapConversion;