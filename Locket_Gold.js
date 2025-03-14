// ===== Botrinhlimex ===== //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// ===== MAIN ===== // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";var botrinhlimex={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"9999-99-99T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2004-01-26T01:04:18Z",purchase_date:"2004-01-26T01:04:17Z",store:"app_store"},nqdtr={grace_period_expires_date:null,purchase_date:"2004-01-26T01:04:17Z",product_identifier:"com.botrinhlimex.premium.yearly",expires_date:"9999-99-99T01:04:17Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(nqdtr.product_identifier=s,obj.subscriber.subscriptions[s]=botrinhlimex):obj.subscriber.subscriptions["com.botrinhlimex.premium.yearly"]=botrinhlimex,obj.subscriber.entitlements[e]=nqdtr}else obj.subscriber.subscriptions["com.botrinhlimex.premium.yearly"]=botrinhlimex,obj.subscriber.entitlements.pro=nqdtr;$done({body:JSON.stringify(obj)});
