export default function PurchasePolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Purchase Policy</h1>
      <div className="prose prose-invert max-w-3xl mx-auto">
        <h2>1. Payment Methods</h2>
        <p>
          Eyo Bots accepts payments via approved methods communicated during the
          order process. All prices are in USD unless otherwise stated.
        </p>

        <h2>2. Order Confirmation</h2>
        <p>
          Orders are confirmed only after payment receipt. You will receive a
          confirmation via Discord or email.
        </p>

        <h2>3. Refund Eligibility</h2>
        <p>
          Refunds are available within 14 days of service delivery only if the
          service fails to meet agreed specifications. No refunds for completed
          services.
        </p>

        <h2>4. Chargebacks</h2>
        <p>
          Unauthorized chargebacks may result in account suspension and
          additional fees to cover administrative costs.
        </p>

        <h2>5. Delivery Time</h2>
        <p>
          Delivery times vary by service and will be communicated during the
          order process. Delays may occur due to unforeseen circumstances.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          For purchase-related issues, join our Discord server at{" "}
          <a href="https://discord.gg/BA433n7Cef">https://discord.gg/BA433n7Cef</a>.
        </p>
      </div>
    </div>
  );
}
