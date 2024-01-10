## Data

This field saves multiple values in the database. Each value is stored in a single row in the database with the same key (similar to what `add_post_meta` does with the last parameter `false`).

If the field is cloneable, then the value is stored as a serialized array in a single row in the database. Each value of that array is an array of cloned values.

:::caution

Note that this field stores the **values**, not labels.

:::

## Template usage

### Using MB Views

**Displaying selected values or labels:**

In the view, click on the **Insert Field** button.

![Go to Views and click on the Insert Field button](https://i.imgur.com/J74Rkam.png)

Find the name of the created field on the list on the right sidebar.

![Find the name of the created field on the list on the right sidebar](https://i.imgur.com/rEK9Eqm.png)

There will be two options to output the data, they are the value and label of the choices that we input in the field.

Just choose one to output only the values, or only the labels. In the event that you want to display both of them, just insert the field twice.

![choose one option to output only the values, or only the labels](https://i.imgur.com/cI8asuN.png)

Then the code will be like this:

![The code to display selected values](https://i.imgur.com/Oaan9xt.png)

Display only the labels:

![Display only the labels](https://i.imgur.com/QnDwhsM.gif)

Display both values and labels:

![Display both values and labels](https://i.imgur.com/2dPnl1G.gif)

**Displaying cloneable values:**

No matter if the field is cloneable or not, the operation to display data from the field will be the same. The difference is just in the generated code.

![Displaying cloneable values](https://i.imgur.com/mmnSFFj.gif)

### Using PHP

**Displaying selected values:**

```php
<?php $values = rwmb_meta( 'my_field_id' ); ?>
<ul>
    <?php foreach ( $values as $value ) : ?>
        <li><?= $value ?></li>
    <?php endforeach ?>
</ul>
```

**Displaying selected labels:**

```php
<p>Choices:</p>
<?php rwmb_the_value( 'my_field_id' ) ?>
```

:::info

`rwmb_the_value()` automatically formats values as an unordered list.

:::

**Displaying both values and labels:**

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

**Displaying cloneable values:**

```php
<?php
$field   = rwmb_get_field_settings( 'my_field_id' );
$options = $field['options'];
$values  = rwmb_meta( 'my_field_id' );
?>
<ul>
    <?php foreach ( $values as $clone ) : ?>
        <li>
            <ul>
                <?php foreach ( $clone as $value ) : ?>
                    <li>
                        Value: <?= $value ?><br>
                        Label: <?= $options[ $value ] ?>
                    </li>
                <?php endforeach ?>
            </ul>
        </li>
    <?php endforeach ?>
</ul>
```
