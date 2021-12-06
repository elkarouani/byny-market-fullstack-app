import { GoogleAuth, LinkedinAuth, TwitterAuth } from "components/UI";

const SocialAuthActions = () => {
	return (
		<div className="flex space-x-16">
			<div 
				id="google_social_auth"
				className="p-2 border rounded-xl"
			>
				<GoogleAuth />
			</div>

			<div 
				id="twitter_social_auth"
				className="p-2 border rounded-xl"
			>
				<TwitterAuth />
			</div>

			<div 
				id="linkedin_social_auth"
				className="p-2 border rounded-xl"
			>
				<LinkedinAuth />
			</div>
		</div>
	)
}

export default SocialAuthActions;