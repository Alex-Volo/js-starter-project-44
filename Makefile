install:
	npm ci && sudo npm link

brain-games:
	bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .