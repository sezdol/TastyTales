const stripe = require('stripe')(process.env.STRIPE_SECRET);

const createCheckout = async (req, res) => {
    const { products } = req.body;

    try {
        const lineItems = products.map((product) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: product.pname,
                    images: [product.imgsrc],
                },
                unit_amount: Math.round(product.price * 100), // Convert to smallest currency unit (e.g., cents)
            },
            quantity: product.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/success", // Replace with your success URL
            cancel_url: "http://localhost:3000/cancel",   // Replace with your cancel URL
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Failed to create checkout session' });
    }
}

module.exports = { createCheckout };
