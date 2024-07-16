function SPToolCard({data}) {
  return (
    <div>
      {data.map((el, index) => (
        <div className="myCard" key={index}>
          <div style={{display: "inline"}}>
            <div>Service Name : {el.serviceName} </div>
            <div>Type : {el.type} </div>
            <div>Payload : </div>
            <dd>- Price MRP : {el.payload.price_MRP} </dd>
            <dd>- Price Sale : {el.payload.price_SALE} </dd>
            <dd>- Max Quantity : {el.payload.maxQuantity} </dd>
            <dd>- FFMplantCode : {el.payload.FFMplantCode} </dd>
            <dd>- Article Number : {el.payload.articleNumber} </dd>
            <dd>- JIT : {el.payload.JIT} </dd>
            <dd>- FC Code : {el.payload.fcCode} </dd>
            <dd>- OLD_price_SALE : {el.payload.OLD_price_SALE} </dd>
            <dd>- landingPrice : {el.payload.landingPrice} </dd>
            <dd>- OLD_maxQuantity : {el.payload.OLD_maxQuantity} </dd>
            <dd>- OLD_discount : {el.payload.OLD_discount} </dd>
            <dd>- discount : {el.payload.discount} </dd>
            <dd>- proposedBy : {el.payload.proposedBy} </dd>
            <dd>- uniqueId : {el.payload.uniqueId} </dd>
          </div>
          <div style={{display: "inline"}}>
            <div>Activity log : </div>
            {el.activityLog.map((el, index) => (
              <div key={index}>
                <dd>
                  <strong>- Action : {el.action} </strong>
                </dd>
                <dd>- userId : {el.userId} </dd>
                <dd>- userRole : {el.userRole} </dd>
                <dd>- createdAt: {el.createdAt} </dd>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SPToolCard;
