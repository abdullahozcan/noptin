<tr class="form-field-row-<?php echo $id; ?> form-field-row-type-<?php echo $type; ?>">
    <th scope="row">

    </th>
    <td>
        <div>
            <label>
                <input type='hidden' value='0' name='noptin_custom_field[<?php echo $name; ?>]'>
                <input
                    type="<?php echo $type; ?>"
                    class="regular-checkbox"
                    name="noptin_custom_field[<?php echo $name; ?>]"
                    id="custom_field_<?php echo $id; ?>"
                    value="1"
                    <?php checked( ! empty( $value ) ); ?>
                >
                <span><?php echo $label; ?></span>
            </label>
        </div>
    </td>
</tr>