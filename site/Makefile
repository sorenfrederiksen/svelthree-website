HASH := `git rev-parse --short HEAD`

SERVICE := svelthree-dev
PROJECT := enduring-coda-283321

IMAGE := gcr.io/$(PROJECT)/$(SERVICE):$(HASH)

sapper:
	#@echo "\n~> updating template (skipped updating contributors list)"
	@npm run update
	@echo "\n~> building Sapper app"
	@npm run sapper


docker:
	@echo "\n~> building docker image"
	@gcloud builds submit --project $(PROJECT) -t $(IMAGE)


deploy: sapper docker
	@echo "\n~> deploying $(SERVICE) to Cloud Run servers"
	@gcloud run deploy $(SERVICE) --project $(PROJECT) --allow-unauthenticated --platform managed --region europe-west4 --image $(IMAGE) --memory=512Mi
