const accountId = import.meta.env.VITE_CLOUDFLARE_ACCOUNT_ID
const streamCustomerCode = import.meta.env.VITE_CLOUDFLARE_STREAM_CUSTOMER_CODE

export function getCloudflareStreamIframe(videoUid) {
  if (!videoUid || !streamCustomerCode) return null
  return `https://customer-${streamCustomerCode}.cloudflarestream.com/${videoUid}/iframe`
}

export function getCloudflareStreamHls(videoUid) {
  if (!videoUid || !streamCustomerCode) return null
  return `https://customer-${streamCustomerCode}.cloudflarestream.com/${videoUid}/manifest/video.m3u8`
}

export const cloudflareConfig = {
  accountId,
  streamCustomerCode
}
