<?php
if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Retrieve block attributes.
$poppable_content_width       = isset($attributes['contentWidth']) ? $attributes['contentWidth'] : '';
$poppable_trigger_id          = isset($attributes['triggerId']) ? $attributes['triggerId'] : '';
$poppable_video_url           = isset($attributes['videoUrl']) ? $attributes['videoUrl'] : '';
$poppable_autoplay            = $attributes['autoplay'];
$poppable_show_close_button   = $attributes['showCloseButton'];
$poppable_close_on_click      = $attributes['closeOnClickOutside'];
$poppable_esc_on_close        = $attributes['escOnClose'];
?>
<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- get_block_wrapper_attributes() returns pre-escaped HTML. ?>
<div <?php echo get_block_wrapper_attributes(); ?> data-poppable-video-url="<?php echo esc_attr($poppable_video_url); ?>" data-poppable-video-trigger-id="<?php echo esc_attr($poppable_trigger_id); ?>" data-poppable-video-autoplay="<?php echo esc_attr($poppable_autoplay); ?>" data-show-close-button="<?php echo esc_attr($poppable_show_close_button); ?>" data-close-on-click-outside="<?php echo esc_attr($poppable_close_on_click); ?>" data-esc-on-close="<?php echo esc_attr($poppable_esc_on_close); ?>" style="--poppable-modal-content-width: <?php echo esc_attr($poppable_content_width); ?>">
    <?php if ($poppable_show_close_button) : ?>
        <span class="poppable-close-modal" id="poppable-close-modal">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#999999"
                viewBox="0 -960 960 960">
                <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
            </svg>
        </span>
    <?php endif; ?>
    <div class="poppable-modal-content">
        <div class="poppable-video-container">
            <iframe
                id="poppable-video-iframe"
                src=""
                allow="autoplay; encrypted-media"
                frameBorder="0"
                allowFullScreen></iframe>
        </div>
    </div>
</div>