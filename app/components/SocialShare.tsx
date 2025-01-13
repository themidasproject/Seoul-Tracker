import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

export default function SocialShare() {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = "Are AI companies following through on their promises?"

  return (
    <div className="mt-8 flex justify-center space-x-4">
      <a
        href={`https://twitter.com/intent/tweet?text=www.seoul-tracker.org`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800 transition-colors"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=www.seoul-tracker.org`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800 transition-colors"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=www.seoul-tracker.org`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800 transition-colors"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  )
}

