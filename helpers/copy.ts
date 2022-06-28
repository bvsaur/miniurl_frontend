export const copyToClipboard = (mini: string) => {
  return navigator.clipboard.writeText(mini)
}
