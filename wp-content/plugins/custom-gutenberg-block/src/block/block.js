import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, RangeControl, ColorPicker } from '@wordpress/components';
import './style.css';

registerBlockType('custom-gutenberg-blocks/image-content', {
    title: 'Image & Content',
    icon: 'format-image',
    category: 'layout',
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
        },
        imageUrl: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src',
        },
        fontSize: {
            type: 'number',
            default: 16, // Default font size
        },
        textColor: {
            type: 'string',
            default: '#000000', // Default text color
        },
    },

    edit: (props) => {
        const { attributes: { content, imageUrl, fontSize, textColor }, setAttributes, className } = props;

        const onSelectImage = (media) => {
            setAttributes({ imageUrl: media.url });
        };

        const onChangeContent = (newContent) => {
            setAttributes({ content: newContent });
        };

        return (
            <div>
                <InspectorControls>
                    <PanelBody title="Text Settings">
                        <RangeControl
                            label="Font Size"
                            value={fontSize}
                            onChange={(newSize) => setAttributes({ fontSize: newSize })}
                            min={10}
                            max={100}
                        />
                        <ColorPicker
                            color={textColor}
                            onChangeComplete={(newColor) => setAttributes({ textColor: newColor.hex })}
                            disableAlpha
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={className} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: '1' }}>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectImage}
                                allowedTypes={['image']}
                                value={imageUrl}
                                render={({ open }) => (
                                    <Button onClick={open} className="button button-large">
                                        {!imageUrl ? 'Upload Image' : 'Change Image'}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                        {imageUrl && (
                            <img src={imageUrl} alt={'Uploaded Image'} style={{ maxWidth: '50%', marginRight: '20px' }} />
                        )}
                    </div>
                    <div style={{ flex: '2' }}>
                        <RichText
                            tagName="p"
                            placeholder="Add your content"
                            value={content}
                            onChange={onChangeContent}
                            style={{ fontSize: `${fontSize}px`, color: textColor }}
                        />
                    </div>
                </div>
            </div>
        );
    },
    save: (props) => {
        const { attributes: { content, imageUrl, fontSize, textColor } } = props;

        return (
            <div className='row-meet' style={{ display: 'flex' }}>
                {imageUrl && (
                    <img src={imageUrl} alt={'Uploaded Image'} style={{ maxWidth: '50%', marginRight: '20px' }} />
                )}
                <RichText.Content
                    tagName="p"
                    value={content}
                    style={{ fontSize: `${fontSize}px`, color: textColor }}
                />
            </div>
        );
    },
});
