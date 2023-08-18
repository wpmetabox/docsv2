When outputting a field, it will have the following HTML:

```html
<!-- Start: field outer HTML -->
{$field['before']}
<div class="rwmb-field rwmb-{$field['type']}-wrapper {$field['class']} required">

	<!-- Start: field wrapper HTML -->

		<!-- Start: field begin HTML -->
		<div class="rwmb-label" id="{$field['id]}-label">
			<label for="{$field['id']}">
				{$field['name']}
				<span class="rwmb-required">*</span>
			</label>
			<p id="{$field['id']}-label-description" class="description">{$field['label_description']}</p>
		</div>
		<div class="rwmb-input">
		<!-- End: field begin HTML -->


			<!-- Field input HTML -->


		<!-- Start: field end HTML -->
			{$add_clone_button}
			<p id="{$field['id']}-description" class="description">{$field['desc']}</p>
		</div>
		<!-- End: field end HTML -->

	<!-- End: field wrapper HTML -->


</div>
{$field['after']}
<!-- End: field outer HTML -->
```
