## Data

This field saves multiple values in the database. Each value is stored in a single row in the database with the same key (similar to what `add_post_meta` does with the last parameter `false`).

If the field is cloneable, then the value is stored as a serialized array in a single row in the database. Each value of that array is an array of cloned values.

:::caution

Note that this field stores the **values**, not labels.

:::

## Template usage

**Output list of choices (values):**

```php
<?php $values = rwmb_meta( 'my_field_id' ); ?>
<ul>
    <?php foreach ( $values as $value ) : ?>
        <li><?= $value ?></li>
    <?php endforeach ?>
</ul>
```

**Display labels:**

```php
<p>Choices:</p>
<?php rwmb_the_value( 'my_field_id' ) ?>
```

:::info

`rwmb_the_value()` automatically formats values as an unordered list.

:::

**Display both values and labels:**

```php
<?php
$field   = rwmb_get_field_settings( 'my_field_id' );
$options = $field['options'];
$values  = rwmb_meta( 'my_field_id' );
?>
<ul>
    <?php foreach ( $values as $value ) : ?>
        <li>
            Value: <?= $value ?><br>
            Label: <?= $options[ $value ] ?>
        </li>
    <?php endforeach ?>
</ul>
```

**Display cloneable values:**

```php
$values = rwmb_meta( $field_id );
echo '<ul>';
foreach ( $values as $clone ) {
    echo '<li>';
        echo '<ul>';
        foreach ( $clone as $value ) {
            echo "<li>$value</li>";
        }
        echo '</ul>';
    echo '</li>';
}
echo '</ul>';
```