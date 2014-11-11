INPUT = ./css/main.scss
OUTPUT = ./css/main.css

sass watch:
	sass --watch \
	$(INPUT):$(OUTPUT) \
	--style expanded \

sass production:
	sass --update \
	$(INPUT):$(OUTPUT) \
	--style compressed \

.PHONY: sass watch sass production