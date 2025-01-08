export const sendOrdersData = async (data: any) => {
  try {
    await fetch('https://holycakes.shop/api/web-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.error('Error sending order data:', error)
  }
}
